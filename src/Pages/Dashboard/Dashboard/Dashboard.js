import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {


    // AKAS ER UPOR TAKE BRISTI PORE OUTLET  
    return (
        <div>
            <h2>This is Dashboard !@ </h2>
            <div className='grid md:grid-cols-2'>
                <nav className='flex flex-col gap-4 border '>
                    <p className='border w-1/4'><Link to="order" className='btn  btn-success hover:green-700 w-full'>Order</Link></p>
                    <p className='border w-1/4'><Link to="manageOrder" className='btn  btn-success hover:green-700 w-full'>manageOrder</Link></p>
                    <p className='border w-1/4'><Link to="addProduct" className='btn  btn-success hover:green-700 w-full'>AddProduct</Link></p>
                </nav>
                <div className='border'>
                    <Outlet />
                </div>
            </div>

        </div>
    );
};

export default Dashboard; 