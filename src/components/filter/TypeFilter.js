import React from 'react'
import { TypeFilterWrapper } from './FilterButton.style'
import CheckboxType from './type-filter/CheckboxType';
import DateType from './type-filter/DateType';

export default function TypeFilter({activeFilter}) {
  const renderType = (activeFilter) => {
    const {type, utils} = activeFilter
    switch (type) {
      case 'checkbox':
        return <CheckboxType />
      case 'date':
        return <DateType utils={utils} />
      default:
        return <p>type</p>
    }
  }
  
  return (
    <TypeFilterWrapper>
      {renderType(activeFilter)}
    </TypeFilterWrapper>
  )
}
