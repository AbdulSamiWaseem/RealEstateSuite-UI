import React, { useState } from 'react'
import './addProperty.css'
import { FaPlus } from "react-icons/fa6";
const AddProperty = () => {
    const [add, setAdd] = useState(false)
    return (
        <div className='addproperty'>
            <div className='property-details container'>
                <h4>Add New Properties</h4>
                <select>
                    <option>Select Billing Type</option>
                </select>
                <select>
                    <option>Extra Land</option>
                </select>
                <select>
                    <option>Land Area / Sq Feet</option>
                </select>
                <select>
                    <option>Select City</option>
                </select>
                <select>
                    <option>Share</option>
                </select>
                <select>
                    <option>Select Covered Area</option>
                </select>
                <select>
                    <option>Select Block</option>
                </select>
                <select>
                    <option>Select Property Type</option>
                </select>
                <select>
                    <option>Select Extra Land Unit</option>
                </select>
                <select>
                    <option>Purchased Price</option>
                </select>
                <select>
                    <option>Select Society</option>
                </select>
                <select>
                    <option>Pending Dues</option>
                </select>
                <select>
                    <option>Land Area / Marla</option>
                </select>
                <select>
                    <option>Property Number</option>
                </select>
                <select>
                    <option>Covered Area</option>
                </select>
                <select>
                    <option>Land Area / Kanal</option>
                </select>
            </div>
            <div className='property-details container'>
                <h4>Possession</h4>
                <select>
                    <option>Enter Possession Area</option>
                </select>
                <select>
                    <option>Enter Alloted Area</option>
                </select>
                <select>
                    <option>Dimension Length ( foot )</option>
                </select>
                <select>
                    <option>Dimension Width ( foot )</option>
                </select>
            </div>
            <div className='property-owner'>
                <h4>Property Owner (Current)</h4>

                {add
                    ? <div className='property-owner-details container'>
                        <h5>Property Owner 1</h5>
                        <input placeholder='Membership Number:' type='number'/>
                        <input placeholder='GL Code:' />
                        <input placeholder='Full Name:' type='text'/>
                        <input placeholder='Father / Husband Name:' type='text'/>
                        <input placeholder='CNIC No. / NTN No.' />
                        <input placeholder='CNIC NO. / NTN Expiry Date:  ( mm / dd / yyyy )' type='date'/>
                        <input placeholder='Current Address:' type='text'/>
                        <input placeholder='Permanent Address' type='text'/>
                        <input placeholder='Phone No. / Mobile No. ( 92 ):' type='tel'/>
                        <input placeholder='Secondary Phone No. / Mobile no. ( 92 ) :' type='tel'/>
                        <input placeholder='Email' type='email'/>
                        <input placeholder='Date of Enrolment as Member :  ( mm / dd / yyyy )' type='date'/>
                        <input placeholder='Date of Approval by the Managing Committee:' type='date'/>
                        <input placeholder='Date of Confirmation by the General body:' type='date'/>
                        <input placeholder='Number of Shares:' type='number'/>
                        <input placeholder='Value of Shares:' type='number'/>
                        <input placeholder='Member Vote:'/>
                        <input placeholder='Membership From Date:  ( mm / dd / yyyy )' type='date'/>
                        <input placeholder='Membership to Date: ( mm / dd / yyyy )' type='date'/>
                        <input placeholder='Share Capitals:'/>

                        
                    </div>
                    : <div className='attachment' onClick={() => setAdd(true)} ><FaPlus /></div>
                }

                <button className='btn btn-primary' onClick={() => setAdd(false)}>Submit</button>
            </div>

        </div>
    )
}

export default AddProperty
