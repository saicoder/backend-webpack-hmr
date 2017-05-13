const responseMock = (onResult) => {
  const resMock = {
    result: { statusCode: 200 },
    json: (jsonObj) => {
      resMock.result.json = jsonObj

      if (typeof onResult === 'function') onResult(resMock.result)
      return resMock
    },
    status: (statusCode) => {
      resMock.result.statusCode = statusCode
      return resMock
    },
  }

  return resMock
}

describe('ResponseMock', () => {
  it('should apply stataus code and json to result', () => {
    const res = responseMock().status(401).json('not found')

    expect(res.result).toEqual({
      statusCode: 401,
      json: 'not found'
    })
  })

  it('should work for async responses', (done) => {
    const res = responseMock((result) => {
      expect(result).toEqual({ statusCode: 301, json: 'async' })
      done()
    })

    setTimeout(() => res.status(301).json('async'), 1)
  })
})

export default responseMock
