import React, { Fragment } from 'react'
import { Grid, Header, Image } from 'semantic-ui-react'
import Description from '../../articles_description'
import { Article } from '../../../types'
import Bubbles from '../../animation/bubbles'

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
                            <h1 className='title_description'>{selectedArticle.title}</h1>
                            <Image className='url_to_image' size='huge' centered src={selectedArticle.urlToImage}></Image>
                            <h3 className='description'><Description /></h3>
                            <h4>{selectedArticle.id}</h4>
                        </Grid>

                    )
                    : (
                        <Fragment>
                            <Bubbles />
                            <Header as='h1' textAlign='center' dividing>Select an article to read from the list</Header>
                        </Fragment>
                    )
            }
        </main>
    )
}

export default PageSliceArticleFull
