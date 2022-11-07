import React from 'react'
import {Button, Container, Header, Segment} from 'semantic-ui-react'
import ArticleFloating from '../../article_floating'
import Bubbles from '../../animation/bubbles'
import { Article, SelectedArticle, SetSelectedArticles } from '../../../types'
import ArticlePreview from '../../article_preview'
import {Link} from 'react-router-dom'

type Props = {
    selectedArticles: SelectedArticle[]
    maxArticlesToSelect: number
    setSelectedArticles: SetSelectedArticles
}

const HomeSelected = ({selectedArticles, maxArticlesToSelect, setSelectedArticles}: Props) => {

   const howManyArticles = selectedArticles.length

   if(howManyArticles === 0){
      return <p></p>
   }


   return (
      <aside className="page-home__selected">
         <Header as='h2' icon textAlign='center'>
            <Header.Content>Selected articles</Header.Content>
         </Header>
         <Header as="h4" textAlign='center'>You chose <strong>{howManyArticles}</strong> articles to read. Maxium selection is <strong>{maxArticlesToSelect}</strong></Header>
         {
            howManyArticles > 0 && (
               <ul className="articles-list__list">
                  <Segment>
                     {
                        selectedArticles.map(selectedArticle => (
                           <li key={`preview_${selectedArticle.id}`}>
                              <ArticlePreview article={selectedArticle} setSelectedArticles={setSelectedArticles} />
                           </li>
                        ))
                     }
                  </Segment>
               </ul>
            )
         }
         <Link to ={'PageRead'}>
            <Button size='large' fluid color='black'
                    content="Go to reading"
                    disabled={selectedArticles.length === 0}
            />
         </Link>
      </aside>
   )
}

export default HomeSelected
