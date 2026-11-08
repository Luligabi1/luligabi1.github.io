const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function walk(node) {
  if (!node.children) return;
  node.children = node.children.map((child) => {
    if (child.type === 'code' && child.lang === 'mermaid') {
      return { type: 'html', value: `<pre class="mermaid">${escapeHtml(child.value)}</pre>` };
    }
    walk(child);
    return child;
  });
}

export default function remarkMermaid() {
  return (tree) => walk(tree);
}
