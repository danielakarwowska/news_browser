import React from 'react'
import { DropdownItemProps, Select } from 'semantic-ui-react'

type Props = {
   category: DropdownItemProps[]
   onFilterSelected: any
}

const LeftNav = ({ onFilterSelected }: Props) => {
   const option = [
      { key: 'general', text: 'general', value: 'general' },
      { key: 'sports', text: 'sports', value: 'sports' },
      { key: 'business', text: 'business', value: 'business' }
   ]
   const handlerCategoryChange = (e: any, data: any) => {
      onFilterSelected(data.value)
    }
   return (
      <nav >
         <Select onChange={handlerCategoryChange}
            placeholder="All category" options={option} />
      </nav>
   )
}
export default LeftNav