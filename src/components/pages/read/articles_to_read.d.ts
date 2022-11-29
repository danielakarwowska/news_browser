import { SelectedArticle, SetSelectedArticle } from '../../../types';
type Props = {
    selectedArticles: SelectedArticle[];
    selectedArticle: string | null;
    setSelectedArticle: SetSelectedArticle;
};
declare const PageSliceArticlesToRead: ({ setSelectedArticle, selectedArticles, selectedArticle }: Props) => JSX.Element;
export default PageSliceArticlesToRead;
