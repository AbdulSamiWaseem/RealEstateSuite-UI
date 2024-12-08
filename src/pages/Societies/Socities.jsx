import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { societiesList } from '../../dummyData';
import './societies.css'
const Societies = () => {
    const columns = [
        { field: 'id', headerName: 'Id', width: 250 },
        {
            field: 'city',
            headerName: 'City',
            width: 250,
            editable: true,
        },
        {
            field: 'societyName',
            headerName: 'Society Name',
            width: 250,
            editable: true,
        },

        {
            field: 'societyNumber',
            headerName: 'Society Number',
            type: 'number',
            sortable: false,
            width: 250,
        },
    ];

    return (
        <div className='societies'>
            <div className='societies-header'>
                <h4>List of Societies</h4>
                <button className='btn btn-success'>Add Society</button>
            </div>
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

export default Societies
