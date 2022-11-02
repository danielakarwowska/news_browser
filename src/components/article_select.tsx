import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import { SelectedArticle, SetSelectedArticle } from '../types'

type Props = {
    article: SelectedArticle
    selectedArticle: string | null
    setSelectedArticle: SetSelectedArticle
}

const ArticleSelect = ({ article, selectedArticle, setSelectedArticle }: Props) => {

    return (
        <div className="article --select">
            <Image src={article.urlToImage} size="small" floated='left' width="100%"></Image>
            <strong>{article.title}</strong>
            <Button basic color="orange" size='medium' fluid
                content="Read more"
                disabled={selectedArticle === article.id}
                onClick={() => setSelectedArticle(article.id)} />
        </div>
    )

}
export default ArticleSelect
