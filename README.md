# markdown-service &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) [![npm](https://img.shields.io/npm/dt/markdown-service.svg)](https://www.npmjs.org/package/markdown-service) [![Gzip size](https://img.badgesize.io/https://unpkg.com/markdown-service/?compression=gzip)](https://unpkg.com/markdown-service/) [![CI Status](https://github.com/klaufel/markdown-service/workflows/CI/badge.svg)](https://github.com/klaufel/markdown-service/actions?query=branch%3Amain)

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
const markdown = await markdownService("//domain.com/markdown.md");

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

## License

[MIT License](LICENSE.md) © [Juan Carlos Ruiz](https://github.com/klaufel)
