import { makeStyles } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
// import DateFnsUtils from '@date-io/date-fns';
import { DateTypeWrapper, KeyboardDatePickerStyled } from '../FilterButton.style'

const useStyles = makeStyles({
  root: {
    height: '2rem',
    backgroundColor: '#fff'
  }
})


export default function DateType({utils}) {
  const classes = useStyles()
  return (
    <DateTypeWrapper>
      <div className='action'>
        <span className='btn select-all'>Pick a Date</span>
        <span className='btn reset'>Reset</span>
      </div>
      <MuiPickersUtilsProvider utils={utils} >
        <KeyboardDatePicker
          InputProps={{
            classes: {
              root: classes.root,
            },
            style: { backgroundColor: '#fff', fontSize: 12 }
          }}
          // value={date.from}
          inputVariant='outlined'
          format='MMMM dd, yyyy'
          size='small'
          space='0px'
          // onChange={(e) => handleChangeDate(e, 'from')}
          // error={date.from === null && error.date}
          // helperText={
          //   date.from === null && error.date && 'This field is required'
          // }
        />
      </MuiPickersUtilsProvider>
    </DateTypeWrapper>
  )
}
