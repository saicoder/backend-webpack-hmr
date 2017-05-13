import { indexRoute } from '../index'
import responseMock from './responseMock'



describe('Index Route', () => {
  it('should output right message', () => {
    const res = responseMock()

    indexRoute(null, res)

    expect(res.result.statusCode).toBe(200)
    expect(res.result.json).toEqual({
      message: 'Hello from hot loaded route, try to change me'
    })
  })
})
