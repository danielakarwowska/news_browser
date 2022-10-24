import React, { useCallback } from 'react'
import { Button, Header, } from 'semantic-ui-react'
import { Article, SelectedArticle, SetSelectedArticles } from '../types'

type Props = {
    article: Article
    selectedArticles: SelectedArticle[]
    maxArticlesToSelect: number
    setSelectedArticles: SetSelectedArticles
}

const ArticleFloating = (props: Props) => {

    const { title, description, publishedAt, urlToImage } = props.article

    const isDisabled = !!props.selectedArticles.find(art => art.id === publishedAt || (props.selectedArticles.length === props.maxArticlesToSelect))


    const onClick = useCallback(() => {
        props.setSelectedArticles(prev => [
            ...prev,
            {
                id: publishedAt,
                title: title,
                description: description,
                urlToImage: urlToImage
            }
        ])
    }, [props.setSelectedArticles, publishedAt, title])
    return (

            <div className="article --floating">
                <Header as='h2'>{title}</Header>
                <Header as='h4'>{description}</Header>
                <Button fluid disabled={isDisabled} content="Add to selected" color='black' onClick={() => onClick()} />
            </div>

    )
}

export default ArticleFloating

/*
<Button content="Dodaj do listy" onClick={() => onClick(props.id, props.title)}/>
*/