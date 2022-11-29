import { Article, SelectedArticle, SetSelectedArticles } from '../../types';
type Props = {
    xPos: number;
    yPos: number;
    article: Article;
    selectedArticles: SelectedArticle[];
    maxArticlesToSelect: number;
    setSelectedArticles: SetSelectedArticles;
};
declare const __ArticleFloating: ({ xPos, yPos, article, selectedArticles, maxArticlesToSelect, setSelectedArticles }: Props) => JSX.Element;
export default __ArticleFloating;
