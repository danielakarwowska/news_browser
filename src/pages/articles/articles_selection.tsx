import React from 'react'
import ArticleFloating from '../../components/article_floating'
import {SetSelectedArticles} from '../../types'

type Props = {
    articles: any[]
    setSelectedArticles: SetSelectedArticles
}

const PageSliceArticlesSelection = ({articles, setSelectedArticles}: Props) => {
    return (
        <main className="articles-selection">
            {articles.length > 0 && (
                <ul className="articles-selection__list">
                    {
                        articles.map(article =>
                            <li key={article.id}>
                                <ArticleFloating id={article.id} title={article.title} description={article.description} setSelectedArticles={setSelectedArticles} />
                            </li>
                        )
                    }
                </ul>
            )}
        </main>
    )
}

export default PageSliceArticlesSelection
