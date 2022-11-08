import React, { useEffect } from 'react'
import ArticleSelect from '../../article_select'
import { SelectedArticle, SetSelectedArticle } from '../../../types'

import { Header, Segment, Table } from 'semantic-ui-react'

type Props = {
    selectedArticles: SelectedArticle[]
    selectedArticle: string | null
    setSelectedArticle: SetSelectedArticle
}


const PageSliceArticlesToRead = ({ setSelectedArticle, selectedArticles, selectedArticle }: Props) => {

    return (
        <aside className="articles-list">
     <Header as='h1' textAlign='center'dividing>Selected articles</Header>
            {selectedArticles.length > 0 && (
                <ul className="articles-to-read__list">
                    {
                        selectedArticles.map(article =>
                            <li key={article.id}>
                                <Segment >
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
