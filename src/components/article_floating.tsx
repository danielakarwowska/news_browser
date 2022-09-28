import React from 'react'

type Props = {
    title: string
    description: string
}

const ArticleFloating = (props: Props) => {
    return (
        <div className="article --floating">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default ArticleFloating
