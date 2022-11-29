import { SelectedArticle, SetSelectedArticles } from '../../../types';
type Props = {
    selectedArticles: SelectedArticle[];
    maxArticlesToSelect: number;
    setSelectedArticles: SetSelectedArticles;
};
declare const HomeSelected: ({ selectedArticles, maxArticlesToSelect, setSelectedArticles }: Props) => JSX.Element;
export default HomeSelected;
