import React from 'react'
import {Button} from 'semantic-ui-react'
import {SelectedArticle, SetSelectedArticle} from '../types'

type Props = {
    article: SelectedArticle
    selectedArticle: string | null
    setSelectedArticle: SetSelectedArticle
}

const ArticleSelect = ({article, selectedArticle, setSelectedArticle}: Props) => {

    return (
        <div className="article --select">
            <strong>{article.title}</strong>
            <Button
                content="Czytaj"
                disabled={selectedArticle === article.id}
                onClick={() => setSelectedArticle(article.id)}/>
                
        </div>
    )
  
}
export default ArticleSelect
