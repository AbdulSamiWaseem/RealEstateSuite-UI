import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { collectionTypesList } from '../../dummyData';
import './collectionTypes.css'
const CollectionTypes = () => {
    const columns = [
        { field: 'id', headerName: 'Id', width: 200 },
        {
            field: 'name',
            headerName: 'Name',
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
        <div className='collection-types'>
            <div className='collection-types-header'>
                <h4>List of Collection Types</h4>
                <button className='btn btn-success'>Add Collection Type</button>
            </div>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={collectionTypesList}
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

export default CollectionTypes
