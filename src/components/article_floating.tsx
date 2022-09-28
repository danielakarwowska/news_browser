import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import {Article, SelectedArticle, SetSelectedArticles} from '../types'

type Props = {
    article: Article
    selectedArticles: SelectedArticle[]
    setSelectedArticles: SetSelectedArticles
}

const ArticleFloating = (props: Props) => {

    const {title, description, id} = props.article
 
    const isDisabled = !!props.selectedArticles.find(art => art.id === id)

    const onClick = useCallback(() => {
        props.setSelectedArticles(prev => [
            ...prev,
            {
                id: id,
                title: title
            }
        ])
    }, [props.setSelectedArticles, id, title])

    return (
        <div className="article --floating">
            <h3>{title}</h3>
            <p>{description}</p>
            <Button disabled={isDisabled} content="Dodaj do listy" onClick={() => onClick()}/>
        </div>
    )
}

export default ArticleFloating

/*
<Button content="Dodaj do listy" onClick={() => onClick(props.id, props.title)}/>
*/