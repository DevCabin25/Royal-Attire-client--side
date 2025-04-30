import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
    return (

        <div>
            <Navbar/>
         <section className='min-h-screen'>
         <Outlet/>
         </section>
            <Footer/>

        </div>
    );
};

export default Root;