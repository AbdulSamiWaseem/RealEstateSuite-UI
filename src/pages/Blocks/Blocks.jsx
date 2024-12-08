import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { blocksList } from '../../dummyData';
import './block.css'
const Blocks = () => {
    const columns = [
        { field: 'id', headerName: 'Id', width: 250 },
        {
            field: 'city',
            headerName: 'City',
            width: 250,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 250,
            editable: true,
        },
    ];
  return (
    <div className='blocks'>
            <div className='blocks-header'>
                <h4>List of Blocks</h4>
                <button className='btn btn-success'>Add Block</button>
            </div>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={blocksList}
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

export default Blocks
