import { SelectedArticle, SetSelectedArticle } from '../types';
type Props = {
    article: SelectedArticle;
    selectedArticle: string | null;
    setSelectedArticle: SetSelectedArticle;
};
declare const ArticleSelect: ({ article, selectedArticle, setSelectedArticle }: Props) => JSX.Element;
export default ArticleSelect;
