import fetch from 'node-fetch'
import { marked } from 'marked'

const regExp = /^(-{3}(?:\n|\r)([\w\W]+?)(?:\n|\r)-{3})?([\w\W]*)*/

function convertMarkdownResponse (response) {
  const contentType = response.headers.get('Content-Type')
  if (contentType.includes('text')) return response.text()
}

function getMarkdownFrontMatter (metas) {
  return metas.split('\n').reduce((acc, meta) => {
    const [key, value] = meta.trim().split(': ', 2)
    const schema = { [key]: value.slice(1, -1) }
    return { ...acc, ...schema }
  }, {})
}

function formatMarkdownResponseToHtml (data) {
  if (!data) return null

  const { 2: metas, 3: body } = regExp.exec(data)
  const content = body ? marked(body) : null
  const head = metas ? getMarkdownFrontMatter(metas) : null

  return { head, content }
}

export default function markdownService (url) {
  if (!url) return null

  return fetch(url)
    .then(convertMarkdownResponse)
    .then(formatMarkdownResponseToHtml)
    .catch(() => null)
}
