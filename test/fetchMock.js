
import fetch from 'node-fetch'

jest.mock('node-fetch')
const { Response } = jest.requireActual('node-fetch')

export default function fetchMock (body, options) {
  return fetch.mockReturnValue(Promise.resolve(new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'text/markdown' },
    ...options
  })))
}
