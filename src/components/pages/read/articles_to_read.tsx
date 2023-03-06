import React from 'react'
import ArticleSelect from '../../article_select'
import { SelectedArticle, SetSelectedArticle } from '../../../types'
import { Container } from 'semantic-ui-react'

type Props = {
    selectedArticles: SelectedArticle[]
    selectedArticle: string | null
    setSelectedArticle: SetSelectedArticle
    maxArticlesToSelect: number
}

const PageSliceArticlesToRead = ({ setSelectedArticle, selectedArticles, selectedArticle,maxArticlesToSelect }: Props) => {
   
    const howManyArticles = selectedArticles.length

    return (
        <aside className="article--preview">
      <strong className='selected'>{howManyArticles} articles to read. Maxium selection is {maxArticlesToSelect}</strong>
            {selectedArticles.length > 0 && (
                <ul className="articles-list__list">
                    {
                        selectedArticles.map(article =>
                            <article className='articles-list' key={article.id}>
                                <ArticleSelect
                                    article={article}
                                    selectedArticle={selectedArticle}
                                    setSelectedArticle={setSelectedArticle}
                                />
                            </article>
                        )
                    }
                </ul>
            )}
        </aside>
    )
}

export default PageSliceArticlesToRead
