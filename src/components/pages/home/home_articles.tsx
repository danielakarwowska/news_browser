import React, { useEffect, useState } from 'react'
import Articles from '../../../components/article/article'
import { Article, SelectedArticle, SetSelectedArticles } from '../../../types'
import allCategory from '../../data/category'

type Props = {
   articles: Article[]
   selectedArticles: SelectedArticle[]
   maxArticlesToSelect: number
   setSelectedArticles: SetSelectedArticles
   cat: any
}
const categories = allCategory

const HomeArticles = ({ articles, maxArticlesToSelect, selectedArticles, setSelectedArticles, cat }: Props) => {


   // const [myList, setList] = useState<Article[]>([])
   // let i = 0

   //    useEffect(() => {
   //       const art = myList.filter((item) => item.category === cat)
   //       setList(art)
   //       if (!articles.length ) return
   //       const timer = setInterval(() => {
   //          setList((prevMyList) => [...prevMyList, articles[i]])
   //          i++
   //          if (i === articles.length - 1) clearInterval(timer)
   //       }, 1000)
   //       return () => clearInterval(timer)
   //    }, [articles, cat])
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
               xPos={90 * index}
               yPos={90 * index}
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
