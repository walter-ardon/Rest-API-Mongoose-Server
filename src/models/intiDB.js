import initArticleData from './initData.js'
import Article from './article.js'

const initDB = () => {
    initArticleData.forEach(item => {
        const article = new Article(item)
        article.save()
    })
}

export default initDB