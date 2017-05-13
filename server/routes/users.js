
const users = [
  { id: 1, fullName: 'John Smith' },
  { id: 2, fullName: 'John Doe' },
]


export const usersIndex = (req, res) => {
  res.json(users)
}


export const usersShow = (req, res) => {
  const id = parseInt(req.params.id, 10)
  const user = users.filter((t) => t.id === id)[0]

  if (user) res.json(user)
  else res.status(404).json('User not found')
}
