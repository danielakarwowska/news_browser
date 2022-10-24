import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Header, List, Segment} from 'semantic-ui-react'
import ArticlePreview from '../../components/article_preview'
import {SelectedArticle, SetSelectedArticles} from '../../types'

type Props = {
    selectedArticles: SelectedArticle[]
    maxArticlesToSelect: number
    setSelectedArticles: SetSelectedArticles
}

const PageSliceArticlesList = ({selectedArticles, maxArticlesToSelect, setSelectedArticles}: Props) => {

    const howManyArticles = selectedArticles.length
    if(howManyArticles === 0){
        return <h2>No aticle selected</h2>
    }


    return (
        <aside className="articles-list">
                <Header as='h2' icon textAlign='center'>
                <Header.Content>Selected articles</Header.Content>
                </Header>
            <Header as="h4" textAlign='center'>You chose <strong>{howManyArticles}</strong> articles to read. Maxium selection is <strong>{maxArticlesToSelect}</strong></Header>
            {
                howManyArticles > 0 && (
                    <ul className="articles-list__list">
                        {
                            selectedArticles.map(selectedArticle => (
                                <Segment>
                                <li key={`preview_${selectedArticle.id}`}>
                                    <ArticlePreview article={selectedArticle} setSelectedArticles={setSelectedArticles} />
                                </li>
                                </Segment>
                            ))
                        }
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

export default PageSliceArticlesList
