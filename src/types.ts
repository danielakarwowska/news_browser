import React, {Dispatch} from "react";

// To co zbierasz z API z newsami
export type Article = {
    id: string
    title: string
    content : string
    urlToImage: any
    publishedAt: string
}

export type SelectedArticle = {
    id: string
    title: string
    description: string
    urlToImage: any

}

export type SetSelectedArticles = Dispatch<React.SetStateAction<SelectedArticle[]>>

export type SetSelectedArticle = Dispatch<React.SetStateAction<string>>