import React, {ReactNode} from 'react'
import {Grid} from 'semantic-ui-react'
import ArticleFloating from '../components/article_floating'

type Props = {
  articles: any[]
}

const PageArticles = ({articles}: Props) => {
  return (
    <div className="page-articles">
      <Grid>
        <Grid.Column width={10} className="articles-selection">
          <main>
            {articles.length > 0 && (
              <ul className="articles-selection__list">
                {
                  articles.map(article =>
                    <li key={article.id}>
                      <ArticleFloating title={article.title} description={article.description} />
                    </li>
                  )
                }
              </ul>
            )}
          </main>
        </Grid.Column>
        <Grid.Column width={6} className="articles-list">
          <aside>
            lista artykułów
          </aside>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default PageArticles
