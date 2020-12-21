import React from 'react'
import { Filter } from 'react-ui'
import DateFnsUtils from '@date-io/date-fns';

const App = () => {
    const listFilter = [
        {
          name: 'Leave Type',
          fieldName: 'leaveType',
          type: 'checkbox',
          options: {
            searchable: true,
            list: [
              {
                value: 1,
                label: 'Policy 1'
              },
              {
                value: 2,
                label: 'Policy 2'
              },
            ]
          }
        },
        {
          name: 'Status',
          fieldName: 'status',
          type: 'checkbox',
          options: {
            searchable: true,
            list: [
              {
                value: 1,
                label: 'Policy 1'
              },
              {
                value: 2,
                label: 'Policy 2'
              },
            ]
          }
        },
        {
          name: 'Date',
          fieldName: 'date',
          type: 'date',
          utils: DateFnsUtils
        },
      ]

    return (
        <React.Fragment>
            <Filter listFilter={listFilter} />
        </React.Fragment>
    )
}

export default App