import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageHome from './components/pages/home/home'
import PageRead from './components/pages/read'
import useLocalStorage from './hooks/use_local_storage'
import { Article, Category } from './types'
import Navbar from './components/navbar/navbar'
import axios from 'axios'
import category from './components/data/category'

const App = () => {

   const [articles, setArticles] = useState<Article[]>([])
   const [sum, setTotalSum] = useState<number>(0)
   const [selectedArticles, setSelectedArticles] = useLocalStorage('selectedArticles', [])
   const [cat, setCategory] = useState('general')
console.log(cat)
   useEffect(() => {
      const fetchNews = async () => {
         try {
            const response = await axios.get(`https://lfc3csdffb.execute-api.eu-west-1.amazonaws.com/newLIve/articles`)
            setArticles(response.data.body)
            console.log(response.data.body)
            setTotalSum(response.data.body.length)
         } catch (error) {
            console.log('error')
         }
      }
        fetchNews()
   }, [cat])

   useEffect(() => {
      localStorage.setItem('selectedArticles', JSON.stringify(selectedArticles))
   }, [selectedArticles])
   console.log(category)
   return (
      <BrowserRouter>
         <Navbar 
         totalSum={sum} 
         articles={articles}
         category={category}
         setCategory={setCategory} />
         <Routes>
            <Route path="/" element={(
               <PageHome
                  articles={articles}
                  selectedArticles={selectedArticles}
                  setSelectedArticles={setSelectedArticles}
                  cat={cat}/>
            )} />
            <Route path="PageRead" element={<PageRead
               articles={articles}
               selectedArticles={selectedArticles} />} />
         </Routes>
      </BrowserRouter>
   )
}
export default App