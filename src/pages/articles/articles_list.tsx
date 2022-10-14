import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'semantic-ui-react'
import ArticlePreview from '../../components/article_preview'
import {SelectedArticle, SetSelectedArticles} from '../../types'

type Props = {
    selectedArticles: SelectedArticle[]
    maxArticlesToSelect: number
    setSelectedArticles: SetSelectedArticles
}

const PageSliceArticlesList = ({selectedArticles, maxArticlesToSelect, setSelectedArticles}: Props) => {

    const howManyArticles = selectedArticles.length

    return (
        <aside className="articles-list">
            <h3>Selected articles</h3>
            <p>You chose <strong>{howManyArticles}</strong> articles to read. Maxium selection is <strong>{maxArticlesToSelect}</strong></p>
            {
                howManyArticles > 0 && (
                    <ul className="articles-list__list">
                        {
                            selectedArticles.map(selectedArticle => (
                                <li key={`preview_${selectedArticle.id}`}>
                                    <ArticlePreview article={selectedArticle} setSelectedArticles={setSelectedArticles} />
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            <Link to ={'PageRead'}>
            <Button
                content="Go to reading"
                disabled={selectedArticles.length === 0}
            />
            </Link>
        </aside>
        
    )
}

export default PageSliceArticlesList
