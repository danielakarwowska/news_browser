import React, {useEffect, useState} from 'react'
import Layout from './components/layout'
import PageArticles from './pages/articles'
import PagePreview from './pages/preview'

import {Article, SelectedArticle} from './types'


const App = (): JSX.Element => {

    const [articles, setArticles] = useState<Article[]>([])

    const [selectedArticles, setSelectedArticles] = useState<SelectedArticle[]>([])

    const [readyToRead, setReadyToRead] = useState(false)

    useEffect(() => {
        // onMount
        setArticles([
            {
                id: '1234',
                title: 'To jest tytul 1',
                description: 'To jest jakis opis'
            },
            {
                id: '2345',
                title: 'To jest tytul 2',
                description: 'To jest jakis opis inny niz pierwszy'
            }
        ])
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
                    : <PagePreview />
            }
        </Layout>
    )
}

// <PagePreview />

export default App
