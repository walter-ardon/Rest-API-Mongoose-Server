import article from '../models/article.js'
import Article from '../models/article.js'

const getArticles = async () => {
    return await Article.find({})
}

const getArticle = async (id) => {
    return await Article.findById(id)
}

const insertArticle = async (article) => {
    const newArticle = new Article({
        ...article,
        date: new Date()
    })
    return await newArticle.save()
}

const updateArticle = async (id, article) => {
    article.date = new Date()
    return await Article.findByIdAndUpdate(id, article, {
        returnOriginal: false
    })
}

export {
    getArticles,
    getArticle,
    insertArticle,
    updateArticle
}