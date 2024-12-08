import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { collectionPlansList } from '../../dummyData';
import './collectionPlans.css'
const CollectionPlans = () => {
    const columns = [
        { field: 'id', headerName: 'Id', width: 200 },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            editable: true,
        },
        {
            field: 'startDate',
            headerName: 'Start Date',
            width: 200,
            editable: true,
        },
        {
            field: 'endDate',
            headerName: 'End Date',
            width: 200,
            editable: true,
        },
        {
            field: 'totalAmount',
            headerName: 'Total Amount',
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
            field: 'assignedBy',
            headerName: 'Assigned By',
            width: 200,
            editable: true,
        },
        {
            field: 'assignedDate',
            headerName: 'Assigned Date',
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
        <div className='collection-plans'>
            <div className='collection-plans-header'>
                <h4>List of Collection Plans</h4>
                <button className='btn btn-success'>Add Collection Plan</button>
            </div>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={collectionPlansList}
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

export default CollectionPlans
