/*
  This express setup is chosen for ease of testing.
  If you decide to go full express, consider:
  - exporting Routers directly from route handlers
    and use supertest npm package for testing them
  - adding middlewares for body parsing, serving static assets
  - adding middlewares for error handling and logging in production
*/

import express, { Router } from 'express'

import { indexRoute } from './routes/index'
import { usersIndex, usersShow } from './routes/users'

const app = express()

app.get('/', indexRoute)

// TODO: Remove me. This demonstrates source map support
app.get('/error', () => { throw new Error('This error should be on line 17 of index file') })

app.use('/users', Router()
  .get('/', usersIndex)
  .get('/:id', usersShow)
)

export default app
