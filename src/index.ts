import express from 'express'
const app = express()

import bodyParser from 'body-parser'
app.use(bodyParser.json())

import router from './routes'
app.use(router)

const PORT: number = (process.env.PORT as any) as number
const HOST: string = process.env.HOST as string

app.listen(PORT, HOST, () => {
  console.log(`API running on http://${HOST}:${PORT}`)
})
