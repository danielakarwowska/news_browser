import React from 'react'
import {Grid} from 'semantic-ui-react'
import HomeArticles from './home_articles'
import HomeSelected from './home_selected'
import {Article, SelectedArticle, SetSelectedArticles} from '../../../types'

type Props = {
   articles: Article[]
   selectedArticles: SelectedArticle[]
   setSelectedArticles: SetSelectedArticles
   category: string
   setCategory: any
}

const maxArticlesToSelect = 5

const PageHome = ({articles, selectedArticles, setSelectedArticles, category, setCategory}: Props) => {

   return (
      <Grid container={true}>
         <Grid.Column width={16} className="--no-padding">
            <div className="page-home">
               <HomeArticles
                  articles={articles}
                  maxArticlesToSelect={maxArticlesToSelect}
                  selectedArticles={selectedArticles}
                  setSelectedArticles={setSelectedArticles}
                  category={category} 
                  setCategory={setCategory}/>
               <HomeSelected
                  selectedArticles={selectedArticles}
                  maxArticlesToSelect={maxArticlesToSelect}
                  setSelectedArticles={setSelectedArticles}
               />
            </div>
         </Grid.Column>
      </Grid>
   )
}
export default PageHome
