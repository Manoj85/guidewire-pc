import { visit } from 'unist-util-visit'
import type { Root, Element, Text } from 'hast'

// Tags where we never highlight terms
const SKIP_TAGS = new Set(['code', 'pre', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])

export function rehypeGlossary(glossary: Record<string, string>) {
  const terms = Object.keys(glossary)
  if (terms.length === 0) return () => {}

  // Sort longest first so "PI Planning" matches before "PI"
  const sorted = [...terms].sort((a, b) => b.length - a.length)

  // Escape special regex chars in term names
  const escaped = sorted.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))

  // Use word-boundary equivalent that works for terms with special chars (P&C, CI/CD)
  const pattern = new RegExp(`(?<![a-zA-Z0-9])(${escaped.join('|')})(?![a-zA-Z0-9])`, 'g')

  return (tree: Root) => {
    // Track ancestors to skip forbidden tags
    const ancestors: Element[] = []

    visit(
      tree,
      (node) => node.type === 'element' || node.type === 'text',
      (node, index, parent) => {
        if (node.type === 'element') {
          const el = node as Element
          if (SKIP_TAGS.has(el.tagName)) return 'skip' as const
          return
        }

        if (node.type !== 'text' || index === null || !parent) return

        // Check if any ancestor is a skip tag
        const parentEl = parent as Element
        if (parentEl.type === 'element' && SKIP_TAGS.has(parentEl.tagName)) return

        const textNode = node as Text
        const text = textNode.value
        const matches = [...text.matchAll(pattern)]
        if (matches.length === 0) return

        const newNodes: (Text | Element)[] = []
        let lastIndex = 0

        for (const match of matches) {
          const start = match.index!
          const term = match[1]

          if (start > lastIndex) {
            newNodes.push({ type: 'text', value: text.slice(lastIndex, start) })
          }

          newNodes.push({
            type: 'element',
            tagName: 'span',
            properties: { dataGlossaryTerm: term, className: ['glossary-term'] },
            children: [{ type: 'text', value: term }],
          } as Element)

          lastIndex = start + term.length
        }

        if (lastIndex < text.length) {
          newNodes.push({ type: 'text', value: text.slice(lastIndex) })
        }

        ;(parent as Element).children.splice(index!, 1, ...newNodes)
      },
    )
  }
}
