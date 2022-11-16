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
// console.log(_myList)
      }, 1000)
      return () => clearInterval(timer)
   }
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
         {/* {articles.map((num) =>  <div key={num}> {num}</div>)} */}
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
