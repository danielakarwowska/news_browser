import React from 'react'
import ArticlePreview from '../../components/article_preview'
import {SelectedArticle} from '../../types'

type Props = {
    selectedArticles: SelectedArticle[]
}

const PageSliceArticlesList = ({selectedArticles}: Props) => {
    const howManyArticles = selectedArticles.length
    return (
        <aside className="articles-list">
            <h3>Selected articles</h3>
            <p>You chose <strong>{howManyArticles}</strong> articles to read.</p>
            {
                howManyArticles > 0 && (
                    <ul className="articles-list__list">
                        {
                            selectedArticles.map(article => (
                                <li key={`preview_${article.id}`}>
                                    <ArticlePreview title={article.title} id={article.id} />
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </aside>
    )
}

export default PageSliceArticlesList
