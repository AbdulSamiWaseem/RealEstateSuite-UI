import React, { useState } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Siderbar';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';
import PropertyList from './pages/PropertyList/PropertyList';
import AddProperty from './pages/AddProperty/AddProperty';
import Cities from './pages/Cities/Cities';
import Societies from './pages/Societies/Socities';
import Blocks from './pages/Blocks/Blocks';
import BillingTypes from './pages/BillingTypes/BillingTypes'
import DocumentTypes from './pages/DocumentTypes/DocumentTypes'
import AreaUnits from './pages/AreaUnits/AreaUnits';
import PrintBills from './pages/PrintBills/PrintBills'
import PropertyBills from './pages/PropertyBills/PropertyBills';
import CollectionTypes from './pages/CollectionTypes/CollectionTypes';
import CollectionHeads from './pages/CollectionHeads/CollectionHeads';
import CollectionPlans from './pages/CollectionPlans/CollectionPlans';
import PlanToProperty from './pages/PlanToProperty/PlanToProperty';
import UsersList from './pages/UsersList/UsersList';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      {login
        ? <Login />
        : <div className="dashboard-container">
          <BrowserRouter>
            <Sidebar />
            <div className="main-content">
              <DashboardHeader />
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/properties'>
                  <Route path='list' element={<PropertyList />} />
                  <Route path='addNew' element={<AddProperty />} />
                </Route>
                <Route path='/propertySetup'>
                  <Route path='cities' element={<Cities />} />
                  <Route path='societies' element={<Societies />} />
                  <Route path='blocks' element={<Blocks />} />
                  <Route path='billingTypes' element={<BillingTypes />} />
                  <Route path='documentTypes' element={<DocumentTypes />} />
                  <Route path='areaUnits' element={<AreaUnits />} />
                </Route>
                <Route path='/billing'>
                  <Route path='printBills' element={<PrintBills />} />
                  <Route path='propertyBills' element={<PropertyBills />} />
                </Route>
                <Route path='/collection'>
                  <Route path='types' element={<CollectionTypes />} />
                  <Route path='heads' element={<CollectionHeads />} />
                  <Route path='plans' element={<CollectionPlans />} />
                  <Route path='plansToProperty' element={<PlanToProperty />} />
                </Route>
                <Route path='/roles&permission' element={<UsersList />} />
              </Routes>
            </div>
          </BrowserRouter>
          |
        </div>

      }


    </div>

  );
}

export default App;

