import React, {Fragment} from 'react'
import {Grid, Header, Image} from 'semantic-ui-react'
import Description from '../../articles_description'
import {Article} from '../../../types'

type Props = {
   selectedArticle: Article | undefined
}

const PageSliceArticleFull = ({selectedArticle}: Props) => {
   return (
      <main className="article-full">
         {
            selectedArticle
               ? (
                  <Grid width="10">
                     <h2 className="title_description">{selectedArticle.title}</h2>
                     <Image className="url_to_image" size="huge" centered src={selectedArticle.urlToImage}></Image>
                     <h3 className="description"><Description/></h3>
                     <h4>{selectedArticle.id}</h4>
                  </Grid>

               )
               : (
                  <Fragment>
                  </Fragment>
               )
         }
      </main>
   )
}

export default PageSliceArticleFull
