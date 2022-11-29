import React from 'react'
import {Menu} from 'semantic-ui-react'
import categories from '../data/category'
import {SetCategory} from '../../types'

type Props = {
   setCategory: SetCategory
}

const RightNav = ({setCategory}: Props) => {
   return (
      <div className="menu_dropdown">
         <h1>Choose your category</h1>
         <Menu vertical>
            {categories.map((category) => (
               <Menu.Item
                  key={category}
                  value={category}
                  button="true" onClick={() => setCategory(category)}
               >
                  {category}
               </Menu.Item>
            ))}
         </Menu>
      </div>
   )
}
export default RightNav