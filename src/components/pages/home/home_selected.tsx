import React from 'react'
import { Button, Container, Segment } from 'semantic-ui-react'
import { SelectedArticle, SetSelectedArticles } from '../../../types'
import ArticlePreview from '../../article_preview'
import { Link } from 'react-router-dom'

type Props = {
   selectedArticles: SelectedArticle[]
   maxArticlesToSelect: number
   setSelectedArticles: SetSelectedArticles
}

const HomeSelected = ({ selectedArticles, maxArticlesToSelect, setSelectedArticles }: Props) => {

   const howManyArticles = selectedArticles.length

   if (howManyArticles === 0) {
      return <p></p>
   }

   return (
      <aside className="page-home__selected">
      <strong className='selected'>{howManyArticles} articles to read. Maxium selection is {maxArticlesToSelect}</strong>
         {
            howManyArticles > 0 && (
               <ul className="articles-list__list">
                     {
                        selectedArticles.map(selectedArticle => (
                           <Segment key={`preview_${selectedArticle.id}`}>
                              <ArticlePreview article={selectedArticle} setSelectedArticles={setSelectedArticles} />
                           </Segment>
                        ))
                     }
               </ul>
            )
         }
         <Link to={'PageRead'}>
            <Button className='signUpBtn'
               content="Go to reading"
               disabled={selectedArticles.length === 0}
            />
         </Link>
      </aside>
   )
}

export default HomeSelected
