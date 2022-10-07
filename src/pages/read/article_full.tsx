import React from 'react'
import {Article} from '../../types'

type Props = {
    selectedArticle: Article
}


const PageSliceArticleFull = ({selectedArticle}: Props) => {
    return (
        <main className="article-full">
            {
                selectedArticle
                    ? (
                        <>
                            <h1>{selectedArticle.title}</h1>
                            <h3>{selectedArticle.description}</h3>
                            <h4>{selectedArticle.id}</h4>
                        </>
                    )
                    :(
                        
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
