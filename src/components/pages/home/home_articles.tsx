import React, { useEffect, useState } from 'react'
import Articles from '../../../components/article/article'
import { Article, SelectedArticle, SetSelectedArticles } from '../../../types'

type Props = {
   articles: []
   selectedArticles: SelectedArticle[]
   maxArticlesToSelect: number
   setSelectedArticles: SetSelectedArticles
   displayArticles: string[]
}

const HomeArticles = ({ articles, maxArticlesToSelect, selectedArticles, setSelectedArticles }: Props) => {

   const [myList, setList] = useState([])
   let i = 0
   useEffect(() => {
      if( articles && articles.length >= i)
      {
      const timer = setInterval(() => {
         const _myList = [...myList]
         _myList.push(articles[i])
         setList(_myList)
         i++
      }, 1000)
      return () => clearInterval(timer)
   }
   }, [articles])
   
   return (
      <main className="page-home__articles">
         {articles.map((article, index) =>
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

{/* {myList.map((article, index) =>
               <Articles.Floating
               key={index}
                  xPos={50 * index}
                  yPos={25 * index}
                  article={article}
                  selectedArticles={selectedArticles}
                  maxArticlesToSelect={maxArticlesToSelect}
                  setSelectedArticles={setSelectedArticles}
               />
         )} */}
