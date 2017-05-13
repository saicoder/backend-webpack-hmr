import { usersIndex, usersShow } from '../users'
import responseMock from './responseMock'



describe('Users Route', () => {
  it('should return all users', () => {
    const res = responseMock()

    usersIndex(null, res)

    expect(res.result.json).toEqual([
      { id: 1, fullName: 'John Smith' },
      { id: 2, fullName: 'John Doe' },
    ])
  })

  it('should return user by id', () => {
    const res = responseMock()

    usersShow({ params: { id: 2 }}, res)

    expect(res.result.json).toEqual({ id: 2, fullName: 'John Doe' })
  })

  it('should throw 404 with message', () => {
    const res = responseMock()

    usersShow({ params: { id: 77 }}, res)

    expect(res.result.json).toEqual('User not found')
    expect(res.result.statusCode).toBe(404)
  })
})
