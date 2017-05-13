const responseMock = () => {
  const resMock = {
    result: {
      statusCode: 200
    },
    json: (jsonObj) => {
      resMock.result.json = jsonObj
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
})

export default responseMock
