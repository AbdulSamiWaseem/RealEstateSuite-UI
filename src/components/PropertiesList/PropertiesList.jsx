import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { propertiesList } from '../../dummyData';
import './propertiesList.css'
const PropertiesList = () => {
  const columns = [
    { field: 'city', headerName: 'City', width: 90 },
    {
      field: 'society',
      headerName: 'Society',
      width: 150,
      editable: true,
    },
    {
      field: 'block',
      headerName: 'Block',
      width: 150,
      editable: true,
    },
    {
      field: 'ownerName',
      headerName: 'Owner Name',
      width: 110,
      editable: true,
    },
    {
      field: 'propertyNumber',
      headerName: 'Property Number',
      type: 'number',
      width: 160,
    },
  ];

  return (
    <div className='properties-list'>
      <h4>Properties List</h4>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={propertiesList}
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
          getRowId={(row) => row.propertyNumber}
          
        />
      </Box>
    </div>
  )
}

export default PropertiesList
