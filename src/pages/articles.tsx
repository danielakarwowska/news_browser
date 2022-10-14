import React from 'react'
import { Grid} from 'semantic-ui-react'
import PageSliceArticlesSelection from './articles/articles_selection'
import PageSliceArticlesList from './articles/articles_list'
import {Article, SelectedArticle, SetSelectedArticles} from '../types'


type Props = {
  articles: Article[]
  selectedArticles: SelectedArticle[]
  setSelectedArticles: SetSelectedArticles
}

const maxArticlesToSelect = 3

const PageArticles = ({articles, selectedArticles, setSelectedArticles}: Props) => {
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
            maxArticlesToSelect={maxArticlesToSelect}
            setSelectedArticles={setSelectedArticles}
          />
        </Grid.Column>
      </Grid>
    </div>
  
  )
}

export default PageArticles
