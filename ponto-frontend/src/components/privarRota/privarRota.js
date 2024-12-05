import React from 'react';

import { estaAutenticado } from '../../services/autenticacao';
import { Navigate } from 'react-router-dom';

const PrivarRota = ({children}) => {
    if(estaAutenticado()) {
        return(children);
    }
    return(<Navigate to="/" />);
}

export default PrivarRota;