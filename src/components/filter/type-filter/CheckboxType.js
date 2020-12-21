import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  makeStyles,
  TextField
} from '@material-ui/core'
import React from 'react'
import { CheckboxTypeWrapper } from '../FilterButton.style'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles({
  root: {
    padding: '0px',
    fontSize: 12,
    padding: '0px 14px 14px 14px'
  },
  rootInput: {
    padding: '0px',
    fontSize: 12,
    height: 28,
    padding: '8px 7px',
    backgroundColor: '#fff'
  },
  rootCheckbox: {
    display: 'flex',
    margin: 0,
    padding: '0px 12px 7px 12px'
  },
  labelCheckbox: {
    fontSize: 12
    // marginTop: '0.5rem'
  },
  checkboxRoot: {
    padding: 0,
    marginRight: 8,
  }
})

const CheckboxItem = ({label, name}) => {
  const classes = useStyles()
  return (
    <FormControlLabel
      classes={{
        root: classes.rootCheckbox,
        label: classes.labelCheckbox
      }}
      control={
        <Checkbox
          // checked={isChecked(res, check)}
          color='primary'
          classes={{
            root: classes.checkboxRoot,
          }}
          // onChange={() => handleCheck(res)}
          name={name}
        />
      }
      label={label}
    />
  )
}

export default function CheckboxType() {
  const classes = useStyles()

  const handleChange = () => {}

  return (
    <CheckboxTypeWrapper>
      <TextField
        variant='outlined'
        classes={{
          root: classes.root
        }}
        placeholder='search'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon style={{ width: 14, height: 14, color: '#014a62' }} />
            </InputAdornment>
          ),
          classes: {
            root: classes.rootInput
          }
        }}
      />
      <div className='action'>
        <span className='btn select-all'>Select All</span>
        <span className='btn reset'>Reset</span>
      </div>
      <div className='list-checkbox'>
        <FormGroup>
          <CheckboxItem label="123" name="Name" />
          <CheckboxItem label="456" name="Name2" />
          <CheckboxItem label="123" name="Name" />
          <CheckboxItem label="456" name="Name2" />
        </FormGroup>
      </div>
    </CheckboxTypeWrapper>
  )
}
