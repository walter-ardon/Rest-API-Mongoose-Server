// import dependencies
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import connectMongoDB from './models/mongoose.js'
import {
    getArticle,
    getArticles,
    insertArticle,
    updateArticle
} from './api/api.js'

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
app.get('/articles/', async (req, res) => {
    const articles = await getArticles()
    res.send(articles)
})

app.get('/articles/:id', async (req, res) => {
    const id = req.params.id
    const article = await getArticle(id)
    res.send(article)
})

app.post('/articles/', async (req, res) => {
    const article = req.body
    const result = await insertArticle(article)
    res.send(result)
})

app.put('/articles/:id', async (req, res) => {
    const id = req.params.id
    const article = req.body
    const result = await updateArticle(id, article)
    res.send(result)
})

// app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))