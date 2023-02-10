import React from 'react'
import { Select } from 'semantic-ui-react'

type Props = {
   onFilterSelected: (selectOption: any) => void
}
const RightNav = ({ onFilterSelected }: Props) => {
   const option = [
      { key: 'general', text: 'general', value: 'general' },
      { key: 'sports', text: 'sports', value: 'sports' },
      { key: 'business', text: 'business', value: 'business' }
   ]

   const handlerCategoryChange = (e: any, data: any) => {
      onFilterSelected(data.value)
      console.log(data.value)
   }
   return (
      <div className="menu_dropdown">
         <h1>Choose your category</h1>
         <Select onChange={handlerCategoryChange}
            placeholder="All category" options={option} />
      </div>
   )
}
export default RightNav