import React, { useEffect, useMemo, useState } from 'react'
import { Button } from 'semantic-ui-react'
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

   const [filterCategory, setFilterCategory] = useState<Article[]>(articles)

   const [myList, setList] = useState<Article[]>([])
      useEffect(() => {
         const art = articles.filter((item) => item.category === cat)
         setFilterCategory(art)
         console.log(filterCategory)
      }, [cat])

   let i = 0
   useEffect(() => {
      if (!articles.length ) return
      const timer = setInterval(() => {
         setList((prevMyList) => [...prevMyList, articles[i]])
         i++
         if (i === articles.length - 1) clearInterval(timer)
      }, 1000)
      return () => clearInterval(timer)
   }, [articles, cat])

   return (
      <main className="page-home__articles">
         {myList.map((article, index) =>
            <Articles.Floating
               key={index}
               xPos={15 * index}
               yPos={15 * index}
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
