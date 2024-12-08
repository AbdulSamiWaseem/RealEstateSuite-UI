import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { usersList } from '../../dummyData';
import './usersList.css'
const UsersList = () => {
    const columns = [
        { field: 'name', headerName: 'Name', width: 200 },
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
            headerName: 'Blocks',
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
        <div className='users-list'>
            <div className='users-list-header'>
                <h4>List of Users</h4>
                <div>
                <button className='btn btn-success'>Add User</button>
                <button className='btn btn-primary'>Roles & Permission</button>
                </div>
            </div>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={usersList}
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
                    getRowId={(row) => row.name}
                />
            </Box>
        </div>
    )
}

export default UsersList
