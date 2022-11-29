import { Article, SelectedArticle, SetSelectedArticles } from '../types';
type Props = {
    article: Article;
    selectedArticles: SelectedArticle[];
    maxArticlesToSelect: number;
    setSelectedArticles: SetSelectedArticles;
};
declare const ArticleFloating: ({ article, selectedArticles, maxArticlesToSelect, setSelectedArticles }: Props) => JSX.Element;
export default ArticleFloating;
