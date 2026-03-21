import type { Root, Element, Text, RootContent } from 'hast'

const SKIP_TAGS = new Set(['code', 'pre', 'a', 'script', 'style'])

function buildPattern(glossary: Record<string, string>): RegExp {
  const terms = Object.keys(glossary).sort((a, b) => b.length - a.length)
  const escaped = terms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  // boundary: not preceded/followed by alphanumeric (handles P&C, CI/CD etc.)
  return new RegExp(`(?<![a-zA-Z0-9])(${escaped.join('|')})(?![a-zA-Z0-9])`, 'g')
}

function processText(text: string, pattern: RegExp): (Text | Element)[] | null {
  const matches = [...text.matchAll(pattern)]
  if (matches.length === 0) return null

  const nodes: (Text | Element)[] = []
  let lastIndex = 0

  for (const match of matches) {
    const start = match.index!
    const term = match[1]

    if (start > lastIndex) {
      nodes.push({ type: 'text', value: text.slice(lastIndex, start) })
    }
    nodes.push({
      type: 'element',
      tagName: 'span',
      properties: { dataGlossaryTerm: term, className: ['glossary-term'] },
      children: [{ type: 'text', value: term }],
    } as Element)

    lastIndex = start + term.length
  }

  if (lastIndex < text.length) {
    nodes.push({ type: 'text', value: text.slice(lastIndex) })
  }

  return nodes
}

// Recursive walker — safe to mutate children[] as we go
function walkChildren(node: Root | Element, pattern: RegExp): void {
  if (!node.children) return
  const children = node.children as RootContent[]
  let i = 0

  while (i < children.length) {
    const child = children[i]

    if (child.type === 'text') {
      const replacements = processText((child as Text).value, pattern)
      if (replacements) {
        children.splice(i, 1, ...(replacements as RootContent[]))
        i += replacements.length
        continue
      }
    } else if (child.type === 'element') {
      const el = child as Element
      if (!SKIP_TAGS.has(el.tagName)) {
        walkChildren(el, pattern)
      }
    }

    i++
  }
}

export function rehypeGlossary(glossary: Record<string, string>) {
  if (Object.keys(glossary).length === 0) return () => {}
  const pattern = buildPattern(glossary)
  return (tree: Root) => walkChildren(tree, pattern)
}
