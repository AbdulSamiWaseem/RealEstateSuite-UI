import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { areaUnitsList } from '../../dummyData';
import './areaUnits.css'
const AreaUnits = () => {
    const columns = [
        { field: 'id', headerName: 'Id', width: 500 },
        {
          field: 'name',
          headerName: 'Name',
          width: 500,
          editable: true,
        },
    
      ];
  return (
    <div className='units'>
        <div className='units-header'>
        <h4>List of Area Units</h4>
        <button className='btn btn-success'>Add Area Unit</button>
        </div>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={areaUnitsList}
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
    </div>
  )
}

export default AreaUnits;
