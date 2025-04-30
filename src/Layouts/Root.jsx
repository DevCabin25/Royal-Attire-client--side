import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
    return (

        <div>
            <header>
            <Navbar/>
            </header>
         <section className='min-h-screen pt-20 '>
         <Outlet/>
         </section>

            <Footer/>


        </div>
    );
};

export default Root;