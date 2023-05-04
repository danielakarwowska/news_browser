import React, { useEffect, useMemo, useState } from 'react'
import Articles from '../../../components/article/article'
import { Article, SelectedArticle, SetSelectedArticles } from '../../../types'

type Props = {
   articles: Article[]
   selectedArticles: SelectedArticle[]
   maxArticlesToSelect: number
   setSelectedArticles: SetSelectedArticles
   category: string
   setCategory: any
}

const HomeArticles = ({ articles, maxArticlesToSelect, selectedArticles, setSelectedArticles, category, setCategory }: Props) => {
   const [myList, setList] = useState<Article[]>([])
   const [filteredList, setFilteredList] = useState<Article[]>([])

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
   
   useMemo(() => {
      if (category === "all") {
         setFilteredList(articles);
      } else {
        const filteredArticles = articles.filter(article => article.category === category);
        setFilteredList(filteredArticles);
      }
    }, [category, articles])
   

   return (
      <main className="page-home__articles">
         {filteredList.map((article, index) =>
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
