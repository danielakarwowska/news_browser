declare const Articles: {
    (): JSX.Element;
    Floating: ({ xPos, yPos, article, selectedArticles, maxArticlesToSelect, setSelectedArticles }: {
        xPos: number;
        yPos: number;
        article: import("../../types").Article;
        selectedArticles: import("../../types").SelectedArticle[];
        maxArticlesToSelect: number;
        setSelectedArticles: import("../../types").SetSelectedArticles;
    }) => JSX.Element;
};
export default Articles;
