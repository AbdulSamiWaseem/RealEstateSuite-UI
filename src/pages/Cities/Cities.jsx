import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { citiesList } from '../../dummyData';
import './cities.css'
import Modal from 'react-bootstrap/Modal';
const Cities = () => {
    const columns = [
        { field: 'id', headerName: 'Id', width: 500 },
        {
          field: 'name',
          headerName: 'Name',
          width: 500,
          editable: true,
        },
    
      ];
      const [flag,setFlag]=useState(false)
      console.log(flag)
  return (
    <div className='cities'>
        <div className='cities-header'>
        <h4>List of Cities</h4>
        <button className='btn btn-success' onClick={()=>setFlag(true)}>Add City</button>
        </div>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={citiesList}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          getRowId={(row) => row.id}
        />
      </Box>
    <Modal show={flag} onHide={() => { }} contentClassName='d-flex justify-content-center align-items-center bg-transparent border-0' centered>
      <input />
      <input/>
      <input/>
      <input/>
      <input/>
      <button onClick={()=>setFlag(false)}>Submit</button>

    </Modal>
    </div>
  )
}

export default Cities
