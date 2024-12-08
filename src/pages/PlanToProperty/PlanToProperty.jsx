import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { collectionPlanToPropertyList } from '../../dummyData';
import './planToProperty.css'
const PlanToProperty = () => {
    const columns = [
        { field: 'id', headerName: 'Id', width: 200 },
        {
            field: 'city',
            headerName: 'City',
            width: 200,
            editable: true,
        },
        {
            field: 'society',
            headerName: 'Society',
            width: 200,
            editable: true,
        },
        {
            field: 'block',
            headerName: 'Property Block',
            width: 200,
            editable: true,
        },
        {
            field: 'billingType',
            headerName: 'Billing Type',
            width: 200,
            editable: true,
        },
        {
            field: 'plan',
            headerName: 'Plan',
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
            field: 'action',
            headerName: 'Action',
            width: 200,
            editable: true,
        },

    ];
    return (
        <div className='collection-planToProperty'>
            <div className='collection-planToProperty-header'>
                <h4>List of Assign Collection Plan to Properties</h4>
                <button className='btn btn-success'>Assign Collection Plan To Property</button>
            </div>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={collectionPlanToPropertyList}
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

export default PlanToProperty
