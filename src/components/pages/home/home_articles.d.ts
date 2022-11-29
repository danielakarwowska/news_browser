import { Article, SelectedArticle, SetSelectedArticles } from '../../../types';
type Props = {
    articles: Article[];
    selectedArticles: SelectedArticle[];
    maxArticlesToSelect: number;
    setSelectedArticles: SetSelectedArticles;
};
declare const HomeArticles: ({ articles, maxArticlesToSelect, selectedArticles, setSelectedArticles }: Props) => JSX.Element;
export default HomeArticles;
