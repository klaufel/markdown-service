import axios from 'axios'
import { marked } from 'marked'

function convertMarkdownResponse (response) {
  const contentType = response.headers.get('Content-Type')
  return contentType.includes('markdown') && response.text()
}

export default function markdownService (url) {
  return axios.get(url)
    .then(convertMarkdownResponse)
    .then((data) => marked(data))
    .catch(() => null)
}
