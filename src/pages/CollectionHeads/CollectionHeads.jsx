import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { collectionHeadsList } from '../../dummyData';
import './collectionHeads.css'
const CollectionHeads = () => {
    const columns = [
        { field: 'id', headerName: 'Id', width: 200 },
        {
            field: 'code',
            headerName: 'Code',
            width: 200,
            editable: true,
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            editable: true,
        },
        {
            field: 'gl',
            headerName: 'GL',
            width: 200,
            editable: true,
        },
        {
            field: 'collectionType',
            headerName: 'Collection Type',
            width: 200,
            editable: true,
        },
        {
            field: 'fromDate',
            headerName: 'From Date',
            width: 200,
            editable: true,
        },
        {
            field: 'toDate',
            headerName: 'To Date',
            width: 200,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 200,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200,
            editable: true,
            renderCell: () => {
                return (
                    <div>
                        <button className='btn btn-primary' style={{ fontSize: "0.8rem", width: "80%", marginRight: "10px" }}>Active</button>
                    </div>
                );
            },
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            editable: true,
            renderCell: () => {
                return (
                    <div>
                        <button className='btn btn-danger' style={{ fontSize: "0.8rem", width: "80%", marginRight: "10px" }}> In Active</button>
                    </div>
                );
            },
        },

    ];
    return (
        <div className='collection-heads'>
            <div className='collection-heads-header'>
                <h4>List of Collection Heads</h4>
                <button className='btn btn-success'>Add Collection Head</button>
            </div>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={collectionHeadsList}
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

export default CollectionHeads
