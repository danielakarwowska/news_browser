import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import {SetSelectedArticles} from '../types'

type Props = {
    id: string
    title: string
    description: string
    setSelectedArticles: SetSelectedArticles
}

const ArticleFloating = (props: Props) => {

    const onClick = useCallback(() => {
        props.setSelectedArticles(prev => [
            ...prev,
            {
                id: props.id,
                title: props.title
            }
        ])
    }, [props.setSelectedArticles, props.id, props.title])

    return (
        <div className="article --floating">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Button content="Dodaj do listy" onClick={() => onClick()}/>
        </div>
    )
}

export default ArticleFloating

/*
<Button content="Dodaj do listy" onClick={() => onClick(props.id, props.title)}/>
*/