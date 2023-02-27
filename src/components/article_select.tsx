import React from 'react'
import { Button } from 'semantic-ui-react'
import { SelectedArticle, SetSelectedArticle } from '../types'

type Props = {
    article: SelectedArticle
    selectedArticle: string | null
    setSelectedArticle: SetSelectedArticle
}

const ArticleSelect = ({ article, selectedArticle, setSelectedArticle }: Props) => {

    return (
        <aside className="page-home__selected">
            <strong >{article.title}</strong>
            <Button basic color="orange" size='medium' fluid
                content="Read more"
                disabled={selectedArticle === article.id}
                onClick={() => setSelectedArticle(article.id)} />
        </aside>
    )

}
export default ArticleSelect
