import { SelectedArticle, SetSelectedArticles } from '../types';
type Props = {
    article: SelectedArticle;
    setSelectedArticles: SetSelectedArticles;
};
declare const ArticlePreview: ({ article, setSelectedArticles }: Props) => JSX.Element;
export default ArticlePreview;
