import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { citiesList } from '../../dummyData';
import './citiesList.css'
const CitiesList = () => {
  const columns = [
    { field: 'id', headerName: 'Id', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },

  ];

  return (
    <div className='cities-list'>
      <h4>List of Cities</h4>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={citiesList}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 2,
              },
            },
          }}
          pageSizeOptions={[2]}
          disableRowSelectionOnClick
          getRowId={(row) => row.id}
        />
      </Box>
    </div>
  )
}

export default CitiesList
