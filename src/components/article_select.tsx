import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { SelectedArticle, SetSelectedArticle } from '../types'

type Props = {
    article: SelectedArticle
    selectedArticle: string | null
    setSelectedArticle: SetSelectedArticle
}

const ArticleSelect = ({ article, selectedArticle, setSelectedArticle }: Props) => {

    return (
        <aside className="article--preview">
            <strong className='preview-title'>{article.title}</strong>
            <Button icon className='preview_button'
                disabled={selectedArticle === article.id}
                onClick={() => setSelectedArticle(article.id)}><Icon name='arrow circle left'/></Button>
        </aside>
    )

}
export default ArticleSelect
