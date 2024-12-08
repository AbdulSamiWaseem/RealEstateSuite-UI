import React from 'react'
import PropertiesList from '../../components/PropertiesList/PropertiesList'
import './propertyList.css'
import { CiFilter } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
const PropertyList = () => {
    return (
        <div className='property-list'>
            <div className='property-filter container'>
                <select>
                    <option>City</option>
                </select>
                <select>
                    <option>Phase</option>
                </select>
                <select>
                    <option>Block</option>
                </select>
                <select>
                    <option>Billing Type</option>
                </select>
                <select>
                    <option>Select Property Type</option>
                </select>
                <select>
                    <option>Plot No</option>
                </select>
                <select>
                    <option>Owner Name</option>
                </select>

            </div>
            <div className='property-search-section container'>
                <div className='search-section-a'>
                <div>Apply Filter
                    <span><CiFilter/></span>
                </div>
                <div>Show Enteries
                    <div>10</div>
                </div>
                </div>
                <div className='search-section-b'>
                    <input placeholder='Search'></input>
                     <button><CiSearch/></button> 
                </div>
            </div>

            <PropertiesList />
        </div>
    )
}

export default PropertyList
