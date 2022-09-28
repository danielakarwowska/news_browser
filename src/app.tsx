import React, {useEffect, useState} from 'react'
import Layout from './components/layout'
import PageArticles from './pages/articles'

const App = (): JSX.Element => {
   
    const [articles, setArticles] = useState<any[]>([])

    useEffect(() => {
        // onMount
        setArticles([
            {
                id: 1234,
                title: 'To jest tytul 1',
                description: 'To jest jakis opis'
            },
            {
                id: 2345,
                title: 'To jest tytul 2',
                description: 'To jest jakis opis inny niz pierwszy'
            }
        ])
    }, [])

    return (
        <Layout>
            <PageArticles articles={articles} />
        </Layout>
    )
}

export default App
