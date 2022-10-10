import React from 'react'
import {ReactNode} from 'react'

// 1.
type Props = {
    children: ReactNode
}


const Layout = ({children}: Props) => {
    return (
        <div className="app">
            {children}
        </div>
    )
}

export default Layout
