// import dependencies
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import connectMongoDB from './models/mongoose.js'
import Article from './models/article.js'

// configure app
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(morgan('combined'))

// connect to mongoDB
connectMongoDB()

// configure endpoints
app.get('/articles', async (req, res) => {
    const articles = await Article.find({})
    res.send(articles)
})

// app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))