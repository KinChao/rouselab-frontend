import React from 'react'
import Navbar from './Navbar';
import { WorkoutsContextProvider } from '../../context/WorkoutsContext';
import Home2 from '../People/Home2';


const AdminPage = () => {
  
  return ( 
    
    <div>
      
      <WorkoutsContextProvider>
        <Navbar />
        <Home2 />
      </WorkoutsContextProvider>

    </div>
   );
}
 
export default AdminPage;
