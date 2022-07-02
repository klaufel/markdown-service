import axios from 'axios'
import { marked } from 'marked'

function convertMarkdownResponse (response) {
  const contentType = response.headers.get('Content-Type')
  return contentType.includes('markdown') && response.text()
}

function formatMarkdownResponseToHtml (data) {
  const content = marked(data)
  const head = {}

  return { head, content }
}

export default function markdownService (url) {
  return axios.get(url)
    .then(convertMarkdownResponse)
    .then(formatMarkdownResponseToHtml)
    .catch(() => null)
}
