import React, {useCallback, useEffect, useReducer, useState} from 'react'
import axios from 'axios'
import Layout from './components/layout'
import PageArticles from './pages/articles'
import PageRead from './pages/read'
import {Article, SelectedArticle} from './types'


const App = ()  => {

    const inicialState = {
        articles: [],
        selectedArticles: [],
    }
    const reducer = (state, action) => {
        const {type, payload} = action
        return {...state, [type]: payload}
    }
    debugger
    const [state, dispach] = useReducer(reducer, inicialState)

    const [articles, setArticles] = useState<Article[]>([])

    const [selectedArticles, setSelectedArticles] = useState<SelectedArticle[]>([])

    const [readyToRead, setReadyToRead] = useState(false)

    const onBackButtonClick = useCallback(() => {
        setReadyToRead(false)
    }, [setReadyToRead])
 
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=Apple&from=2022-10-12&sortBy=popularity&language=en&apiKey=992cc5dfe65d43f582c92f6610baab68")
        .then((response) => {
            setArticles(response.data.articles)
            console.log(response.data.articles)
        })
    }, [])

    return (
        <Layout>
            {
                !readyToRead
                    ?   (
                            <PageArticles
                                articles={articles}
                                setReadyToRead={setReadyToRead}
                                selectedArticles={selectedArticles}
                                setSelectedArticles={setSelectedArticles}
                            />
                        )
                    :   (
                            <PageRead
                                articles={articles}
                                selectedArticles={selectedArticles}
                                onBackButtonClick={onBackButtonClick}
                            />
                        )
            }
        </Layout>
    )
}

// <PagePreview />

export default App
