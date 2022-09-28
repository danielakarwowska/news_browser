import React from 'react'
import {SelectedArticle} from '../types'

type Props = SelectedArticle

const ArticlePreview = (props: Props) => {
    return (
        <div className="article --preview">
            <strong>{props.title}</strong>
        </div>
    )
}

export default ArticlePreview
