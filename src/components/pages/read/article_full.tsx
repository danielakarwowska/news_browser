import React, {Fragment} from 'react'
import {Container, Grid, Header, Image} from 'semantic-ui-react'
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
                  <article className='url__image'>
                     {/* <strong className='article_full_title'>{selectedArticle.title}</strong> */}
                     <img className="url_to_image" src={selectedArticle.urlToImage} alt=''></img>
                     <article className="description"><Description/></article>
                     <h4>{selectedArticle.id}</h4>
                  </article>

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
