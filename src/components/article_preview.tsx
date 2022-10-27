import React, {useCallback} from 'react'
import {Button} from 'semantic-ui-react'
import {SelectedArticle, SetSelectedArticles} from '../types'

type Props = {
    article: SelectedArticle
    setSelectedArticles: SetSelectedArticles
}

const ArticlePreview = ({article, setSelectedArticles}: Props) => {

    const onDeleteClick = useCallback(() => {
        
        setSelectedArticles(prev => {
            // CEL: usunac element z tablicy
            const _selectedArticles = [...prev]
            // 1. znalezc index
            const index = prev.findIndex(art => art.id === article.id)
            // 2. usunac element
            _selectedArticles.splice(index, 1)
            // 3. zapisac nowa tablice bez tego elementu (zwrocic wewnatrz setSelectedArticles)
            return _selectedArticles 
        })
    }, [setSelectedArticles])

    return (
        <div className="article --preview">
            <strong>{article.title}</strong>
            <Button basic color="orange" size='medium' fluid content="Delete" onClick={onDeleteClick}/>
        </div>
    )
}
export default ArticlePreview
