import React from 'react';
import { useNavigate } from 'react-router-dom';

import { LogOutIcone } from './stylesNavBar';
import { logout } from '../../services/autenticacao';


const LogOut = () => {  
    const navigate = useNavigate();

    const realizarLogout = () => {
        logout();
        navigate('/');
    }

    return (
        <div className="d-flex align-items-center">
            <LogOutIcone onClick={realizarLogout} title={"Sair"}/>
        </div>
    );
};

export default LogOut;