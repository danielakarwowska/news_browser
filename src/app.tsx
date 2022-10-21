import React, { useEffect, useReducer, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import PageArticles from './pages/articles'
import PageRead from './pages/read'
import useLocalStorage from './hooks/use_local_storage'
import { Article, SelectedArticle } from './types'
import Navbar from './components/Navbar'

const App = () => {

    const [articles, setArticles] = useState<Article[]>([])

    const [selectedArticles, setSelectedArticles] = useLocalStorage('selectedArticles', [])

    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=Apple&from=2022-10-12&sortBy=popularity&language=en&apiKey=992cc5dfe65d43f582c92f6610baab68")
            .then((response) => {
                setArticles(response.data.articles)
                console.log(response.data.articles)
            })
    }, [])
    

    useEffect(() => {
        localStorage.setItem('selectedArticles', JSON.stringify(selectedArticles))
       }, [selectedArticles])
    
    return (
        <BrowserRouter>
            <Navbar/>
        <Routes>
            <Route path="/" element={<PageArticles
                                        articles={articles}
                                        selectedArticles={selectedArticles}
                                        setSelectedArticles={setSelectedArticles}/>}/>
            <Route path="PageRead" element={<PageRead
                                        articles={articles}
                                        selectedArticles={selectedArticles}/>}/>
        </Routes>
        </BrowserRouter>

    )
}


export default App
