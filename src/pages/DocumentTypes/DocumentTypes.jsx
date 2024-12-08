import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { documentsList } from '../../dummyData';
import './documentTypes.css'
const DocumentTypes = () => {
    const columns = [
        { field: 'id', headerName: 'Id', width: 250 },
        {
            field: 'name',
            headerName: 'Name',
            width: 250,
            editable: true,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 250,
            editable: true,
        },

        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            width: 250,
           
        },
    ];

    return (
        <div className='document-types'>
            <div className='document-types-header'>
                <h4>List of Document Types</h4>
                <button className='btn btn-success'>Add Document Type</button>
            </div>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={documentsList}
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

export default DocumentTypes;
