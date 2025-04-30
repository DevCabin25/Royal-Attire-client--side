import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className=''>
            <Navbar />

            <Outlet />

            <Footer />
        </div>
    );
};

export default Root;