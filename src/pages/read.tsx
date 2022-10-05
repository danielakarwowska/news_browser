import React, {useState} from 'react'
import {Grid} from 'semantic-ui-react'
import {Article, SelectedArticle} from '../types'
import PageSliceArticlesToRead from './read/articles_to_read'
import PageSliceArticleFull from './read/article_full'

type Props = {
  articles: Article[]
  selectedArticles: SelectedArticle[]
  onBackButtonClick: any
}

const PageRead = ({articles, onBackButtonClick, selectedArticles}) => {

    const [selectedArticle, setSelectedArticle] = useState<string>(null)

    return (
        <div className="page-preview">
        <Grid>
          <Grid.Column width={10}>
            <PageSliceArticleFull selectedArticle={articles.find(a => a.id === selectedArticle)}/>
          </Grid.Column>
          <Grid.Column width={6}>
            <PageSliceArticlesToRead selectedArticle={selectedArticle} selectedArticles={selectedArticles} setSelectedArticle={setSelectedArticle} />
            <button onClick={onBackButtonClick}>Back and clear</button>
          </Grid.Column>
        </Grid>
      </div>
    )
}

export default PageRead
