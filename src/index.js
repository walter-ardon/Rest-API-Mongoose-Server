// import dependencies
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'

// configure app
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(morgan('combined'))

// configure endpoints
app.get('/', (req, res) => res.send('Hello World!'))

// app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))