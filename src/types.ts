import React, {Dispatch} from "react";

// To co zbierasz z API z newsami
export type Article = {
    id: string
    title: string
    description: string
}

export type SelectedArticle = {
    id: string
    title: string
}

export type SetSelectedArticles = Dispatch<React.SetStateAction<SelectedArticle[]>>