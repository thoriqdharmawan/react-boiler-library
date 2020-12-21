import React from 'react'
import { ListFilterWrapper, ItemFilterWrapper } from './FilterButton.style'

const ItemFilter = ({ name, count, active = false, ...child }) => {
  return (
    <ItemFilterWrapper {...child} active={active} count={count}>
      <span className='name'>{name}</span>
      <span className='count'>{count}</span>
    </ItemFilterWrapper>
  )
}

export default function ListFilter({
  listFilter,
  setActiveFilter,
  activeFilter
}) {
  return (
    <ListFilterWrapper>
      <div className='list-item'>
        {listFilter.map((list, i) => {
          return (
            <ItemFilter
              active={list.fieldName === activeFilter.fieldName}
              onClick={() => setActiveFilter(list)}
              key={`${i}-${list.fieldName}`}
              name={list.name}
              count={3}
            />
          )
        })}
      </div>
      <div className='footer'>
        <span className='btn reset-all'>Reset All</span>
        <div className='action'>
          <span className='btn cancel'>Cancel</span>
          <span className='btn apply'>Apply</span>
        </div>
      </div>
    </ListFilterWrapper>
  )
}
