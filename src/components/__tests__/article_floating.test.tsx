// import React from "react"
// import ArticleFloating from '../article_floating'
// import { render, screen } from "@testing-library/react"
// import { SelectedArticle } from "../../types"
// import axios from "axios"



// describe('article_floating Component', () => {
//     it('The Add to selected button is disabled after selected article', () => {
//         render(<ArticleFloating article={{
//             id: "",
//             title: "",
//             description: "",
//             urlToImage: undefined,
//             publishedAt: ""
//         }} selectedArticles={[]} maxArticlesToSelect={0} setSelectedArticles={function (value: React.SetStateAction<SelectedArticle[]>): void {
//             throw new Error("Function not implemented.")
//         } }/>)
//         expect(screen.getByRole('button', {name: /Add to selected/i})).toBeDisabled()
//     })
// })