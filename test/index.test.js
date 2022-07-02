/* global describe, it, expect */
import markdownService from '../src/markdown-service.js'

describe('markdownService()', () => {
  it('should return null catching the error without url param', async () => {
    const markdown = await markdownService()
    expect(markdown).toBe(null)
  })

  it('should return null catching the error with wrong url', async () => {
    const markdown = await markdownService('wrong url for parsed')
    expect(markdown).toBe(null)
  })
})
