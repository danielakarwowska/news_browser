import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageHome from './components/pages/home/home'
import PageRead from './components/pages/read'
import useLocalStorage from './hooks/use_local_storage'
import { Article } from './types'
import Navbar from './components/navbar/navbar'

const App = () => {

   //json-server --watch db.json

   const [articles, setArticles] = useState<Article[]>([])
   const [sum, setTotalSum] = useState<number>(0)
   const [selectedArticles, setSelectedArticles] = useLocalStorage('selectedArticles', [])

   useEffect(() => {
      fetch('http://localhost:3000/articles')
         .then((res) => res.json())
         .then((result) => {
            setArticles(result)
            setTotalSum(result.length)
         })
   }, [])

   useEffect(() => {
      localStorage.setItem('selectedArticles', JSON.stringify(selectedArticles))
   }, [selectedArticles])

   return (
      <BrowserRouter>
         <Navbar totalSum={sum} articles={articles} />
         <Routes>
            <Route path="/" element={(
               <PageHome
                  articles={articles}
                  selectedArticles={selectedArticles}
                  setSelectedArticles={setSelectedArticles} />
            )} />
            <Route path="PageRead" element={<PageRead
               articles={articles}
               selectedArticles={selectedArticles} />} />
         </Routes>
      </BrowserRouter>
   )
}
export default App
