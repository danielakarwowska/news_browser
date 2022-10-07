import React from 'react'
import {Button, Grid} from 'semantic-ui-react'
import PageSliceArticlesSelection from './articles/articles_selection'
import PageSliceArticlesList from './articles/articles_list'
import {Article, SelectedArticle, SetSelectedArticles} from '../types'


type Props = {
  articles: Article[]
  selectedArticles: SelectedArticle[]
  setReadyToRead: any
  setSelectedArticles: SetSelectedArticles
}

const maxArticlesToSelect = 15

const PageArticles = ({articles, selectedArticles, setReadyToRead, setSelectedArticles}: Props) => {
  return (
    <div className="page-articles">
      <Grid>
        <Grid.Column width={10}>
          <PageSliceArticlesSelection
            articles={articles}
            maxArticlesToSelect={maxArticlesToSelect}
            selectedArticles={selectedArticles}
            setSelectedArticles={setSelectedArticles}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <PageSliceArticlesList
            selectedArticles={selectedArticles}
            setReadyToRead={setReadyToRead}
            maxArticlesToSelect={maxArticlesToSelect}
            setSelectedArticles={setSelectedArticles}
          />
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default PageArticles
