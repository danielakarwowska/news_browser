import React from 'react'
import { Container } from 'semantic-ui-react'
import ArticleFloating from '../../article_floating'
import Bubbles from '../../animation/bubbles'
import { Article, SelectedArticle, SetSelectedArticles } from '../../../types'

type Props = {
    articles: Article[]
    selectedArticles: SelectedArticle[]
    maxArticlesToSelect: number
    setSelectedArticles: SetSelectedArticles
}

const PageSliceArticlesSelection = ({ articles, maxArticlesToSelect, selectedArticles, setSelectedArticles }: Props) => {

    return (
        <Container>
            <main className="articles-selection">
                {articles.length > 0 && (
                    <ul className="articles-selection__list" >
                        <Bubbles />
                        {
                            articles.map(article =>
                                <li key={article.publishedAt}>
                                    <ArticleFloating
                                        article={article}
                                        selectedArticles={selectedArticles}
                                        maxArticlesToSelect={maxArticlesToSelect}
                                        setSelectedArticles={setSelectedArticles}
                                    />
                                </li>
                            )
                        }
                    </ul>
                )}
            </main>
        </Container>
    )
}

export default PageSliceArticlesSelection
