import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import PageArticles from './pages/articles'
import PageRead from './pages/read'
import { Article, SelectedArticle } from './types'

// const inicialState = {
//     articles: [],
//     selectedArticles: [],
//     readyToRead: false
// }
// const articleReducer = (state, action) => {
//     return inicialState
// }
const App = () => {

    // const [articleState, dispachArticle] = useReducer(articleReducer, inicialState)

    const [articles, setArticles] = useState<Article[]>([])

    const [selectedArticles, setSelectedArticles] = useState<SelectedArticle[]>([])


    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=Apple&from=2022-10-12&sortBy=popularity&language=en&apiKey=992cc5dfe65d43f582c92f6610baab68")
            .then((response) => {
                setArticles(response.data.articles)
                console.log(response.data.articles)
            })
    }, [])

    return (
        <BrowserRouter>
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
