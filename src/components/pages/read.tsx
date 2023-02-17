import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid } from 'semantic-ui-react'
import { Article, SelectedArticle } from '../../types'
import PageSliceArticlesToRead from './read/articles_to_read'
import PageSliceArticleFull from './read/article_full'

type Props = {
   articles: Article[]
   selectedArticles: SelectedArticle[]
}

const PageRead = ({ articles, selectedArticles }: Props) => {

   const [selectedArticle, setSelectedArticle] = useState<string>('')

   return (
      <div className="page-preview">
         <Grid>
            <Grid.Column width={10}>
               <PageSliceArticleFull selectedArticle={articles.find(a => a.publishedAt === selectedArticle)} />
            </Grid.Column>
            <Grid.Column width={6}>
               <PageSliceArticlesToRead selectedArticle={selectedArticle} selectedArticles={selectedArticles}
                  setSelectedArticle={setSelectedArticle} />
               <Link to="/">
                  <Button size="large" content="Back" fluid color="black"></Button>
               </Link>
            </Grid.Column>
         </Grid>
      </div>
   )
}

export default PageRead
