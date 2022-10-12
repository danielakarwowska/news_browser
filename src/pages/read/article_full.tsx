import React from 'react'
import Description from '../../components/articles.description'
import { Button } from 'semantic-ui-react'
import { Article } from '../../types'

type Props = {
    selectedArticle: Article
}


const PageSliceArticleFull = ({ selectedArticle }: Props) => {
    return (
        <main className="article-full">
            {
                selectedArticle
                    ? (
                        <>
                            <h1>{selectedArticle.title}</h1>
                            <img className='image-url' src={selectedArticle.urlToImage} alt={selectedArticle.urlToImage}/>              
                            <h3><Description/></h3>
                            <h4>{selectedArticle.id}</h4>
                        </>

                    )
                    : (

                        <>
                            <h3>No article selected</h3>
                            <span>Select an article to read from the list</span>
                        </>
                    )
            }
        </main>
    )
}

export default PageSliceArticleFull
