import React from 'react'
import { Button, Segment } from 'semantic-ui-react'
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
      <aside className="article--preview">
      <strong className='selected'>{howManyArticles} articles to read. Maximum selection is {maxArticlesToSelect}</strong>
         {
            howManyArticles > 0 && (
               <ul className="articles-list__list">
                     {
                        selectedArticles.map(selectedArticle => (
                           <article className='articles-list' key={`preview_${selectedArticle.id}`}>
                              <ArticlePreview article={selectedArticle} setSelectedArticles={setSelectedArticles} />
                           </article>
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
