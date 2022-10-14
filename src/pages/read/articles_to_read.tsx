import React, { useEffect } from 'react'
import ArticleSelect from '../../components/article_select'
import {SelectedArticle, SetSelectedArticle} from '../../types'

type Props = {
    selectedArticles: SelectedArticle[]
    selectedArticle: string | null
    setSelectedArticle: SetSelectedArticle
}


const PageSliceArticlesToRead = ({setSelectedArticle, selectedArticles, selectedArticle}: Props) => {

    return (
        <main className="articles-to-read">
            {selectedArticles.length > 0 && (
                <ul className="articles-to-read__list">
                    {
                        selectedArticles.map(article =>
                            <li key={article.id}>
                                <ArticleSelect
                                    article={article}
                                    selectedArticle={selectedArticle}
                                    setSelectedArticle={setSelectedArticle}
                                />
                            </li>
                        )
                    }
                </ul>
            )}
        </main>
    )
}

export default PageSliceArticlesToRead
