import React, { useCallback } from 'react'
import { Button } from 'semantic-ui-react'
import { Article, SelectedArticle, SetSelectedArticles } from '../../types'

type Props = {
   xPos: number
   yPos: number
   article: Article
   selectedArticles: SelectedArticle[]
   maxArticlesToSelect: number
   setSelectedArticles: SetSelectedArticles
}

const __ArticleFloating = ({ xPos, yPos, article, selectedArticles, maxArticlesToSelect, setSelectedArticles }: Props) => {

   const { title, description, publishedAt, urlToImage, category } = article
   const isDisabled = !!selectedArticles.find(art => art.id === publishedAt || (selectedArticles.length === maxArticlesToSelect))

   const onClick = useCallback(() => {
      setSelectedArticles(prev => [
         ...prev,
         {
            id: publishedAt,
            title: title,
            description: description,
            urlToImage: urlToImage,
            category: category
         }
      ])
   }, [setSelectedArticles, publishedAt, title, selectedArticles])
   return (
      <article className="article --floating"
         style={{ left: xPos, top: yPos }}
      >
         <Button
            className="--button"
            disabled={isDisabled}
            content={title}
            onClick={onClick}>
         </Button>
      </article>
   )
}

export default __ArticleFloating