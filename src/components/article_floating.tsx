import React, {useCallback} from 'react'

import {Button} from 'semantic-ui-react'
import {Article, SelectedArticle, SetSelectedArticles} from '../types'

type Props = {
    article: Article
    selectedArticles: SelectedArticle[]
    maxArticlesToSelect: number
    setSelectedArticles: SetSelectedArticles
}

const ArticleFloating = (props: Props) => {

    const {title,description, content, publishedAt, urlToImage} = props.article

    const isDisabled = !!props.selectedArticles.find(art => art.id === publishedAt)


    const onClick = useCallback(() => {
        props.setSelectedArticles(prev => [
            ...prev,
            {
                id: publishedAt,
                title: title,
                content:content,
                description:description,
                urlToImage: urlToImage
            }
        ])
    }, [props.setSelectedArticles, publishedAt, title])
    return (
        <div className="article --floating">
            <h3>{title}</h3>
            <h4>{description}</h4>
            <Button disabled={isDisabled} content="Dodaj do listy" onClick={() => onClick()}/>
        </div>
    )
}

export default ArticleFloating

/*
<Button content="Dodaj do listy" onClick={() => onClick(props.id, props.title)}/>
*/