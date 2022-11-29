import { Article, SelectedArticle, SetSelectedArticles } from '../../../types';
type Props = {
    articles: Article[];
    selectedArticles: SelectedArticle[];
    setSelectedArticles: SetSelectedArticles;
};
declare const PageHome: ({ articles, selectedArticles, setSelectedArticles }: Props) => JSX.Element;
export default PageHome;
