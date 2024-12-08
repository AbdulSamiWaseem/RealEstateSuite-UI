import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { printablebillsList } from '../../dummyData';
import './printBills.css'
const PrintBills = () => {
    const columns = [
        { field: 'id', headerName: 'Id', width: 100 },
        {
            field: 'city',
            headerName: 'City',
            width: 150,
            editable: true,
        },
        {
            field: 'society',
            headerName: 'Society',
            width: 150,
            editable: true,
        },
        {
            field: 'block',
            headerName: 'Property Block',
            width: 150,
            editable: true,
        },
        {
            field: 'billingType',
            headerName: 'Billing Type',
            width: 150,
            editable: true,
        },
        {
            field: 'plan',
            headerName: 'Plan',
            width: 150,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            editable: true,
            renderCell: () => {
                // console.log(params.row.img[0])
                return (
                    <button className='btn btn-success' style={{ fontSize: "0.8rem", width: "100%" }}>Generate Bill</button>
                );
            },
        },
    ];
    return (
        <div className='print-bills'>
            <div className='print-bills-filter property-details container'>
                <div className='print-bills-filter-header '>
                    <div>Download Bill</div>
                    <div>Apply Filter</div>
                </div>
                <div className='print-bills-filter-content'>
                    <select>
                        <option>City</option>
                    </select>
                    <select>
                        <option>Phase</option>
                    </select>
                    <select>
                        <option>Block</option>
                    </select>
                </div>
            </div>
            <div className='print-bills-list'>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={printablebillsList}
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
        </div>
    )
}

export default PrintBills
