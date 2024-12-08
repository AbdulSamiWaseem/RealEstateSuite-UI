import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { billsList } from '../../dummyData';
import './billingTypes.css'
const BillingTypes = () => {
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
    <div className='bills'>
            <div className='bills-header'>
                <h4>List of Billing Types</h4>
                <button className='btn btn-success'>Add Billing Type</button>
            </div>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={billsList}
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

export default BillingTypes
