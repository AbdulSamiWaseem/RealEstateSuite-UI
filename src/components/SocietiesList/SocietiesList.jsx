import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { societiesList } from '../../dummyData';
import './societiesList.css'
const SocietiesList = () => {
  const columns = [
    { field: 'id', headerName: 'Id', width: 90 },
    {
      field: 'city',
      headerName: 'City',
      width: 150,
      editable: true,
    },
    {
      field: 'societyName',
      headerName: 'Society Name',
      width: 150,
      editable: true,
    },

    {
      field: 'societyNumber',
      headerName: 'Society Number',
      type: 'number',
      sortable: false,
      width: 160,
    },
  ];

  return (
    <div className='societies-list'>
      <h4>List of Societies</h4>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={societiesList}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 4,
              },
            },
          }}
          pageSizeOptions={[4]}
          disableRowSelectionOnClick
          getRowId={(row) => row.id}
        />
      </Box>
    </div>
  )
}

export default SocietiesList
