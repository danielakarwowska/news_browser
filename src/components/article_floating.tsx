import React, { useCallback } from 'react'
import { Button, Header, } from 'semantic-ui-react'
import { Article, SelectedArticle, SetSelectedArticles } from '../types'

type Props = {
    article: Article
    selectedArticles: SelectedArticle[]
    maxArticlesToSelect: number
    setSelectedArticles: SetSelectedArticles
}

const ArticleFloating = ({ article, selectedArticles, maxArticlesToSelect, setSelectedArticles }: Props) => {
    
    const { title, description, publishedAt, urlToImage } = article

    const isDisabled = !!selectedArticles.find(art => art.id === publishedAt || (selectedArticles.length === maxArticlesToSelect))


    const onClick = useCallback(() => {
        setSelectedArticles(prev => [
            ...prev,
            {
                id: publishedAt,
                title: title,
                description: description,
                urlToImage: urlToImage
            }
        ])
    }, [setSelectedArticles, publishedAt, title, selectedArticles])
    return (

        <div className="article --floating">
            <Header as='h4' >{title}</Header>
            <Button size='medium' fluid
                disabled={isDisabled}
                content="Add to selected" color='black'
                onClick={() => onClick()} />
        </div>

    )
}

export default ArticleFloating