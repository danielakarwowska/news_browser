import React, { useEffect } from 'react'
import ArticleSelect from '../../article_select'
import { SelectedArticle, SetSelectedArticle } from '../../../types'
import { Header, Segment, Table } from 'semantic-ui-react'

type Props = {
    selectedArticles: SelectedArticle[]
    selectedArticle: string | null
    setSelectedArticle: SetSelectedArticle
    maxArticlesToSelect: number
}

const PageSliceArticlesToRead = ({ setSelectedArticle, selectedArticles, selectedArticle,maxArticlesToSelect }: Props) => {
   
    const howManyArticles = selectedArticles.length

    return (
        <aside className="page-home__selected">
      <strong className='selected'>{howManyArticles} articles to read. Maxium selection is {maxArticlesToSelect}</strong>
            {selectedArticles.length > 0 && (
                <ul className="articles-list__list">
                    {
                        selectedArticles.map(article =>
                            <li key={article.id}>
                                <Segment>
                                <ArticleSelect
                                    article={article}
                                    selectedArticle={selectedArticle}
                                    setSelectedArticle={setSelectedArticle}
                                />
                                </Segment>
                            </li>
                        )
                    }
                </ul>
            )}
        </aside>
    )
}

export default PageSliceArticlesToRead
