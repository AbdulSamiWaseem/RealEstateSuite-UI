import React from 'react'
import Sidebar from '../../components/Sidebar/Siderbar';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import StatsCard from '../../components/StatsCard/StatsCard';
import PropertiesList from '../../components/PropertiesList/PropertiesList';
import CitiesList from '../../components/CitiesList/CitiesList';
import SocietiesList from '../../components/SocietiesList/SocietiesList';
import TrafficChart from '../../components/TrafficChart/TrafficChart';
import { propertiesList, citiesList, societiesList } from '../../dummyData';
import './dashboard.css'
import { DataGrid } from '@mui/x-data-grid';


const Dashboard = () => {
    return (
        <div className='content'>
            <h1 style={{ fontWeight: "700", color: "#374957" }}>Dashboard</h1>
            <p style={{ color: "#1bcfb4" }}>Welcome back, Farhan</p>
            <div className="stats-cards-container">
                <StatsCard title="Total Properties" count="2527" color1="#FE9496" color2="#FDDADB" icon="🏠" />
                <StatsCard title="Total Societies" count="08" color="#60A5FA" icon="🏛️" />
                <StatsCard title="Total Cities" count="04" color="#34D399" icon="🌆" />
                <StatsCard title="Total Users" count="2527" color="#A78BFA" icon="👤" />
            </div>
            <div className="lists-and-charts">
                <PropertiesList />
                <TrafficChart />

            </div>
            <div className="lists">

                <CitiesList />
                <SocietiesList />
            </div>
        </div>

    )
}

export default Dashboard
