# 🔤 Markdown service

## 🚀 Installation

```sh
npm install markdown-service
```

## 🧐 How to use?

```js
import markdownService from "markdown-service";

const markdown = await markdownService("//domain.com/awesome-readme.md");
```

## ⚙️ Format support

[Markdown syntax](https://www.markdownguide.org/cheat-sheet/)

### Front matter `---`

YAML can be used at the top of Markdown documents to add more structured data.

Surround the YAML with two lines of consecutive dashes.

```mdx
---
name: "The shadow of the wind"
author: "Carlos Ruiz Zafón"
---

_Daniel_, welcome to the cemetery of forgotten books.
```

```js
const markdown = await markdownService('//domain.com/markdown.md')

/*
{
  head: {
    name: "The shadow of the wind",
    author: 'Carlos Ruiz Zafón',
  },
  content: '<strong>Daniel</strong>, welcome to the cemetery of forgotten books.'
}
*/
```
