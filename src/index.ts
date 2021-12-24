import express from 'express'
const app = express()

import bodyParser from 'body-parser'
app.use(bodyParser.json())

import router from './routes'
app.use(router)

const PORT = 3000
const HOST = '0.0.0.0'
app.listen(PORT, HOST, () => {
  console.log(`API running on http://${HOST}:${PORT}`)
})
