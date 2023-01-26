import React from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../Datatablesource';




const Datatable = () => {

  const actionColumn=[
    {field:"action",
      headerName:"Action",
      width:200,
      renderCell:()=>{
        return(
          <div className='cellAction'>
            <div className='viewButton'>View</div>
            <div className='deleteButton'>delete</div>
          </div>
        )
      }
  }
  ]
  return (
    <div className='datatable'>
      <DataGrid
    rows={userRows}
    columns={userColumns.concat(actionColumn)}
    pageSize={8}
    rowsPerPageOptions={[8]}
    checkboxSelection
  />
  </div>
  )
}

export default Datatable