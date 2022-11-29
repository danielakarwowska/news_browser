import { Article, SelectedArticle } from '../../types';
type Props = {
    articles: Article[];
    selectedArticles: SelectedArticle[];
};
declare const PageRead: ({ articles, selectedArticles }: Props) => JSX.Element;
export default PageRead;
