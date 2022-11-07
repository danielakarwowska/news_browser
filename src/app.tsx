import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import PageArticles from './components/pages/articles'
import PageRead from './components/pages/read'
import useLocalStorage from './hooks/use_local_storage'
import { Article } from './types'
import Navbar from './components/navbar/navbar'
import apikey from  './components/data/config'

const App = () => {

    const [articles, setArticles] = useState<Article[]>([])
    const [sum, setTotalSum] = useState<number>(0)
    const [selectedArticles, setSelectedArticles] = useLocalStorage('selectedArticles', [])
    const [category, setCategory] = useState('general')

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}`)
                setArticles(response.data.articles)
                setTotalSum(response.data.articles.length)
            } catch (error) {
                console.log("error");
            }
        }
        
        fetchNews();
    }, [category])

    useEffect(() => {
        localStorage.setItem('selectedArticles', JSON.stringify(selectedArticles))
    }, [selectedArticles])

    return (
        <BrowserRouter>
            <Navbar totalSum={sum}
                setCategory={setCategory} />
            <Routes>
                <Route path="/" element={<PageArticles
                    articles={articles}
                    selectedArticles={selectedArticles}
                    setSelectedArticles={setSelectedArticles} />} />
                <Route path="PageRead" element={<PageRead
                    articles={articles}
                    selectedArticles={selectedArticles}/>} />
            </Routes>
        </BrowserRouter>

    )
}
export default App
