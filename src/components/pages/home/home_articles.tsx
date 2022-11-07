import React from 'react'
import Article from '../../../components/article/article'
import {SelectedArticle, SetSelectedArticles} from '../../../types'

type Props = {
   articles: any[]
   selectedArticles: SelectedArticle[]
   maxArticlesToSelect: number
   setSelectedArticles: SetSelectedArticles
}

const HomeArticles = ({articles, maxArticlesToSelect, selectedArticles, setSelectedArticles}: Props) => {
   return (
      <main className="page-home__articles">
         {articles.length > 0 && (
            articles.map((article, index) =>
               <Article.Floating
                  xPos={50*index}
                  yPos={25*index}
                  article={article}
                  selectedArticles={selectedArticles}
                  maxArticlesToSelect={maxArticlesToSelect}
                  setSelectedArticles={setSelectedArticles}
               />
            )
         )}
      </main>
   )
}

export default HomeArticles
