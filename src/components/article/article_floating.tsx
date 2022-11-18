import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import {Article, SelectedArticle, SetSelectedArticles} from '../../types'

type Props = {
   xPos: number
   yPos: number
   article: Article
   selectedArticles: SelectedArticle[]
   maxArticlesToSelect: number
   setSelectedArticles: SetSelectedArticles
}

const __ArticleFloating = ({xPos, yPos, article, selectedArticles, maxArticlesToSelect, setSelectedArticles}: Props) => {
   const {title, description, publishedAt, urlToImage} = article
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
      <div className="article --floating" style={{left: xPos, top: yPos}}>
         <Button 
            fluid
            className="--button"
            disabled={isDisabled}
            content={title}
            onClick={onClick}
         />
      </div>
   )
}

export default __ArticleFloating