import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import {SelectedArticle, SetSelectedArticles} from '../types'

type Props = {
    article: SelectedArticle
    setSelectedArticles: SetSelectedArticles
}

const ArticlePreview = (props: Props) => {

    const onDeleteClick = useCallback(() => {
        
        props.setSelectedArticles(prev => {
            // CEL: usunac element z tablicy
            const _selectedArticles = [...prev]
            // 1. znalezc index
            const index = prev.findIndex(art => art.id === props.article.id)
            // 2. usunac element
            _selectedArticles.splice(index, 1)
            // 3. zapisac nowa tablice bez tego elementu (zwrocic wewnatrz setSelectedArticles)
            return _selectedArticles
        })
    }, [])

    return (
        <div className="article --preview">
            <strong>{props.article.title}</strong>
            <Button content="Usuń" onClick={onDeleteClick}/>
        </div>
    )
}

export default ArticlePreview
