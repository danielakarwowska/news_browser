import React from 'react';
import { render } from '@testing-library/react';
import ArticleFloating from '../components/article/article_floating';
import { SelectedArticle } from '../types';

describe('__ArticleFloating', () => {
  test('renders a button on the page', () => {
    const mockArticle = {
        id: 'sasasa',
        category: 'general',
        title: 'The Last of Us: Season 1 Review - IGN',
        description:
          "Check out our The Last of Us Season 1 review. HBO's The Last of Us TV show is a stunning adaptation that should thrill newcomers and enrich those already fam...",
        urlToImage:
          'https://i.ytimg.com/vi/XS3ImpFTxIQ/maxresdefault.jpg',
        publishedAt: '2023-01-10T08:01:59Z',
    }

    const { getByRole } = render(
        <ArticleFloating
      xPos={100}
      yPos={100}
      article={mockArticle}
      selectedArticles={[]}
      maxArticlesToSelect={5}
      setSelectedArticles={() => {}}
    />
    )
    const buttonElement = getByRole('button')

    expect(buttonElement).toBeInTheDocument()
  })
})