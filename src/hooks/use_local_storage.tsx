import { useState } from "react"

const useLocalStorage = (key: string, inicialValue: []) => {
    
    const [value, setValue] = useState(() => {
        try{
            const localStorageJson = localStorage.getItem(key)
            return localStorageJson ? JSON.parse(localStorageJson) : inicialValue
        }catch (e) {
            return inicialValue
        }
    }
    )
    const updateValue = (value: any) => {
        setValue(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [value, updateValue]
}
export default useLocalStorage