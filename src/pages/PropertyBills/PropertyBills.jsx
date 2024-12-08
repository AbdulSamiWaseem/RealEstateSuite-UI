import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { propertyBillsList } from '../../dummyData';
import './propertyBills.css'
const PropertyBills = () => {
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
            field: 'plotNumber',
            headerName: 'Plot Number',
            width: 150,
            editable: true,
        },
        {
            field: 'owner',
            headerName: 'Owner',
            width: 150,
            editable: true,
        },
        {
            field: 'challanNumber',
            headerName: 'Challan Number',
            width: 150,
            editable: true,
        },
        {
            field: 'billingMonth',
            headerName: 'Billing Month',
            width: 150,
            editable: true,
        },
        {
            field: 'billAmount',
            headerName: 'Bill Amount',
            width: 150,
            editable: true,
        },
        {
            field: 'dueAmount',
            headerName: 'Amount After Due Date',
            width: 150,
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
            editable: true,
            renderCell: () => {
                return (
                    <button className='btn btn-danger' style={{ fontSize: "0.8rem", width: "100%" }}>Un Paid</button>
                );
            },
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 300,
            editable: true,
            renderCell: () => {
                return (
                    <div>
                        <button className='btn btn-primary' style={{ fontSize: "0.8rem", width: "48%", marginRight: "10px" }}>Enter Payment</button>
                        <button className='btn btn-success' style={{ fontSize: "0.8rem", width: "48%", marginRight: "10px" }}>No Slip</button>
                    </div>
                );
            },
        },

    ];
    return (
        <div className='property-bills'>
            <div className='property-bills-filter property-details property-owner-details container'>
                <div className='property-bills-filter-header '>
                    <div>List of Property Bills</div>
                    <div>Apply Filter</div>
                </div>
                <div className='property-bills-filter-content'>
                    <select>
                        <option>City</option>
                    </select>
                    <select>
                        <option>Society</option>
                    </select>
                    <select>
                        <option>Block</option>
                    </select>
                    <select>
                        <option>Billing Type</option>
                    </select>
                    <select>
                        <option>Plot No</option>
                    </select>
                    <input placeholder='From Month/Year' />
                    <input placeholder='To Month/Year' />

                </div>
            </div>
            <div className='property-bills-list'>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={propertyBillsList}
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

export default PropertyBills
