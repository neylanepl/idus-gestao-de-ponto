import React from 'react';
import NavBar from '../navBar/navBar';
import Footer from './footer';

const Base = ({children}) => {
    return (
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    );
}

export default Base;