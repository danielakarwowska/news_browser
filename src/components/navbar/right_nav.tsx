import React, { Fragment, useState } from "react"
import { Dropdown } from "semantic-ui-react"
import { Link } from "react-router-dom"

const RightNav = () => {

    const options = [
        { key: 'Home', text: 'Home',value: 'Home', icon: 'user', as: Link, to: '/' },
        { key: 'Sports', text: 'Sports',value: 'Sports', icon: 'baseball ball', as: Link, to: 'sports_category' },
        { key: 'Business', text: 'Business',value: 'Business', icon: 'monero', as: Link, to: 'business_category' },
    ]

    return (
        <div className="menu_dropdown">
            <h1>Choose your category</h1>
            <Dropdown
                search
                selection
                options={options}
                placeholder='Category Options'
            />
        </div>
    )
}
export default RightNav