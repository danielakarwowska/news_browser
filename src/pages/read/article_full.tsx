import React from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import Description from '../../components/articles.description'
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
                        <Grid width="10">
                            <Image src={selectedArticle.urlToImage}></Image>   
                            <p>{selectedArticle.publishedAt}</p>
                            <h1 className='title_description'>{selectedArticle.title}</h1>           
                            <h3 className='description'><Description/></h3>
                            <h4>{selectedArticle.id}</h4>
                        </Grid>

                    )
                    : (
                            <Header as='h1' textAlign='center'dividing>Select an article to read from the list</Header>
                    )
            }
        </main>
    )
}

export default PageSliceArticleFull
