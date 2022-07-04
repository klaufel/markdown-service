/* global describe, it, jest, expect */
import fetch from 'node-fetch'
import markdownService from '../src/markdown-service.js'
import { frontMatterFixture, markdownFixture, markdownWithFrontMatterFixture } from './fixtures/markdown.js'

jest.mock('node-fetch')
const { Response } = jest.requireActual('node-fetch')

const url = '//localhost/markdown.md'

const fetchMock = (body, options) => {
  return fetch.mockReturnValue(Promise.resolve(new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'text/markdown' },
    ...options
  })))
}

describe('markdownService()', () => {
  it('should return null without url', async () => {
    const response = await markdownService()
    expect(response).toBe(null)
  })

  it('should return null catching the error with wrong url', async () => {
    fetchMock(null, { status: 400 })

    const response = await markdownService('wrong url for parsed')

    expect(response).toBe(null)
  })

  it('should return null with wrong file support (markdown content-type file)', async () => {
    fetchMock(markdownFixture, {
      headers: { 'Content-Type': 'application/json' }
    })

    const response = await markdownService(url)

    expect(response).toBe(null)
  })

  describe('test markdown response formats', () => {
    it('should return only yaml front matter reponse format ', async () => {
      fetchMock(frontMatterFixture)

      const response = await markdownService(url)

      expect(response).toEqual({
        head: { name: 'The shadow of the wind', author: 'Carlos Ruiz Zafón' },
        content: null
      })
    })

    it('should return only markdown reponse format ', async () => {
      fetchMock(markdownFixture)

      const response = await markdownService(url)

      expect(response).toEqual({
        head: null,
        content: '<p><em>Daniel</em>, welcome to the cemetery of forgotten books.</p>\n'
      })
    })

    it('should return all file formats, front matter with markdown content format', async () => {
      fetchMock(markdownWithFrontMatterFixture)

      const response = await markdownService(url)

      expect(response).toEqual({
        head: { name: 'The shadow of the wind', author: 'Carlos Ruiz Zafón' },
        content: '<p><em>Daniel</em>, welcome to the cemetery of forgotten books.</p>\n'
      })
    })
  })
})
