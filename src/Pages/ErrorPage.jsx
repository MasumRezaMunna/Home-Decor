import React from 'react';
import { useRouteError } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const ErrorPage = () => {

    const error = useRouteError()
    return (
        <>
        <NavBar></NavBar>
        <div>
            {error.message}
        </div>
        <Footer></Footer>
        </>
    );
};

export default ErrorPage;