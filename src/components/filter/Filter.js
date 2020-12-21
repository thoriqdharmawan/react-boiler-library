import { Button, makeStyles, Popover } from '@material-ui/core'
import React, { useState } from 'react'
// import { FilterWrapper } from './FilterButton.style'
import ListFilter from './ListFilter'
import TypeFilter from './TypeFilter'

const useStyles = makeStyles({
  paper: {
    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'muli',
    borderRadius: 5,
    minHeight: 217
  }
})

export default function Filter({ listFilter }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [activeFilter, setActiveFilter] = useState(listFilter[0])

  // console.log("listFilter : ", listFilter)
  // console.log('activeFilter : ', activeFilter)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'filter' : undefined
  return (
    <div>
      <Button
        aria-describedby={id}
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        CLICK
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{
          paper: classes.paper
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <ListFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          listFilter={listFilter}
        />
        <TypeFilter activeFilter={activeFilter} />
      </Popover>
    </div>
  )
}
