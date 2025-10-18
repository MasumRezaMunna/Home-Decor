import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <h1>Content</h1>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;