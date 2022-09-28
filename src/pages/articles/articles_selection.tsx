import React from 'react'
import ArticleFloating from '../../components/article_floating'
import {Article, SelectedArticle, SetSelectedArticles} from '../../types'

type Props = {
    articles: Article[]
    selectedArticles: SelectedArticle[]
    setSelectedArticles: SetSelectedArticles
}

const PageSliceArticlesSelection = ({articles, selectedArticles, setSelectedArticles}: Props) => {
    return (
        <main className="articles-selection">
            {articles.length > 0 && (
                <ul className="articles-selection__list">
                    {
                        articles.map(article =>
                            <li key={article.id}>
                                <ArticleFloating
                                    article={article}
                                    selectedArticles={selectedArticles}
                                    setSelectedArticles={setSelectedArticles}
                                />
                            </li>
                        )
                    }
                </ul>
            )}
        </main>
    )
}

export default PageSliceArticlesSelection
