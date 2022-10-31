import React, { useReducer, useState } from "react"

const SportsCategory = () => {
    
    const inicialState = {
        name: '',
    }
    const actionTypes = {
        updateName:'UPDATE_NAME'
    }
    const reducer = (state , action) => {
        switch(action.type){
            case actionTypes.updateName:
                return{...state,
                        name: action
                }

                default:
                return state
        }
    }
    const[state, dispach] = useReducer(reducer, inicialState)

    const [name, setName] = useState('')

    const addName = () => {
        dispach({type: actionTypes.updateName})
    }
    // const increment = () => {
    // dispach()       
    // }
    const handleChange = (e) => {
        e.preventDefault()
        setName('')
    }
    return (
        <div>
            <form onSubmit={handleChange}>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            </form>
        </div>
}
export default SportsCategory