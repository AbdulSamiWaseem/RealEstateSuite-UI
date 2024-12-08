import React from 'react';
import './sidebar.css';
import Brand from '../../components/Brand/Brand'
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { BsHouse } from "react-icons/bs";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdLabelOutline } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Brand />
      <ul className="sidebar-menu">
       <Link to="/"><li style={{ backgroundColor: "#9747ff", color: "white", fontWeight: "600", borderRadius: "10px", padding: "10px" }}><RxDashboard size={25}/> Dashboard</li></Link> 
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item sidebar-item">
            <h2 className="accordion-header">
              <button className="accordion-button sidebar-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                <BsHouse size={25}/> Properties
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <Link to="/properties/list"><li><FaRegCircle/> List</li></Link>
                <Link to="/properties/addNew"><li><FaRegCircle/> Add New</li></Link>
              </div>
            </div>
          </div>
          <div className="accordion-item sidebar-item">
            <h2 className="accordion-header">
              <button className="accordion-button sidebar-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                <RiCheckboxMultipleLine size={25}/> Property Setup
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">
                <Link to="/propertySetup/cities"><li><FaRegCircle/> City</li></Link>
                <Link to="/propertySetup/societies"><li><FaRegCircle/> Society</li></Link>
                <Link to="/propertySetup/blocks"><li><FaRegCircle/> Block</li></Link>
                <Link to="/propertySetup/billingTypes"><li><FaRegCircle/> Billing Types</li></Link>
                <Link to="/propertySetup/documentTypes"><li><FaRegCircle/> Document Types</li></Link>
                <Link to="/propertySetup/areaUnits"><li><FaRegCircle/> Area Units</li></Link>
              </div>
            </div>
          </div>
          <div className="accordion-item sidebar-item">
            <h2 className="accordion-header">
              <button className="accordion-button sidebar-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                <FaRegFileAlt size={25}/> Billing
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body">
                <Link to="/billing/printBills"><li><FaRegCircle/> Print Monthly Bills</li></Link>
                <Link to="/billing/propertyBills"><li><FaRegCircle/> Properties Bills</li></Link>
              </div>
            </div>
          </div>
          <div className="accordion-item sidebar-item">
            <h2 className="accordion-header">
              <button className="accordion-button sidebar-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                <FaLayerGroup size={25}/> Collection
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
              <div className="accordion-body">
                <Link to="/collection/types"><li><MdLabelOutline/> Collection Types</li></Link>
                <Link to="/collection/heads"><li><MdLabelOutline/> Collection Heads</li></Link>
                <Link to="/collection/plans"><li><MdLabelOutline/> Collection Plan</li></Link>
                <Link to="/collection/plansToProperty"><li><MdLabelOutline/> Collections Plan To P</li></Link>
              </div>
            </div>
          </div>
          <div className='accordion-item sidebar-item'>
            <div className='accordion-body' style={{ padding: "16px 20px" }}>
              <Link to="/roles&permission"><li style={{ padding: "0" }}><FaPen size={25}/> Roles & Permission</li></Link>
            </div>
          </div>
        </div>

      </ul>
    </div>
  );
};

export default Sidebar;
