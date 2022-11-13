import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Articles from '../../../components/article/article'
import { Article, SelectedArticle, SetSelectedArticles } from '../../../types'

type Props = {
   articles: any[]
   selectedArticles: SelectedArticle[]
   maxArticlesToSelect: number
   setSelectedArticles: SetSelectedArticles
   displayArticles: []
}

const HomeArticles = ({ articles, maxArticlesToSelect, selectedArticles, setSelectedArticles }: Props) => {

   let displayArticles = []
   let i = 0
   useEffect(() => {
      setTimeout(() => {
         if (articles && articles.length >= i) {
            displayArticles.push(articles[i]);
            i++;
         }
      }, 500)
   }, [articles])
   console.log(displayArticles)

   return (
      <main className="page-home__articles">
         {
            articles.map((article, index) =>
               <Articles.Floating
                  xPos={25 * index}
                  yPos={25 * index}
                  article={article}
                  selectedArticles={selectedArticles}
                  maxArticlesToSelect={maxArticlesToSelect}
                  setSelectedArticles={setSelectedArticles}
               />
            )
         }
      </main>
   )
}

export default HomeArticles
