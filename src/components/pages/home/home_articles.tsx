import React, {useEffect, useState} from 'react'
import Articles from '../../../components/article/article'
import {Article, SelectedArticle, SetSelectedArticles} from '../../../types'

type Props = {
   articles: Article[]
   selectedArticles: SelectedArticle[]
   maxArticlesToSelect: number
   setSelectedArticles: SetSelectedArticles
}

const HomeArticles = ({articles, maxArticlesToSelect, selectedArticles, setSelectedArticles}: Props) => {

   const [myList, setList] = useState<Article[]>([])
   let i = 0
   useEffect(() => {
      if (!articles.length) return
      const timer = setInterval(() => {
         setList((prevMyList) => [...prevMyList, articles[i]])
         i++
         if (i === articles.length - 1) clearInterval(timer)
      }, 1000)
      return () => clearInterval(timer)
   }, [articles])

   return (
      <main className="page-home__articles">
         {myList.map((article, index) =>
            <Articles.Floating
               key={index}
               xPos={50 * index}
               yPos={25 * index}
               article={article}
               selectedArticles={selectedArticles}
               maxArticlesToSelect={maxArticlesToSelect}
               setSelectedArticles={setSelectedArticles}
            />
         )}
      </main>
   )
}
export default HomeArticles
