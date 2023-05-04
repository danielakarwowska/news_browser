import React, {Dispatch} from "react"

export type Article = {
    id: string
    title: string
    description : string
    urlToImage: any
    publishedAt: string
    category: string
}

export type SelectedArticle = {
    id: string
    title: string
    description: string
    urlToImage: any
}

export type SetSelectedArticles = Dispatch<React.SetStateAction<SelectedArticle[]>>

export type SetSelectedArticle = Dispatch<React.SetStateAction<string>>

export type SetCategory = Dispatch<React.SetStateAction<string>>