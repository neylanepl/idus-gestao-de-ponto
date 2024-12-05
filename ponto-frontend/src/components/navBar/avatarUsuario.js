import React, { useState, useEffect } from 'react';

import { Avatar} from './stylesNavBar';
import { carregarDados } from '../../services/conexaoPontoApi';
import { obterIdUsuarioAtual } from '../../services/autenticacao';

const AvatarUsuario = () => {  
    let usuarioId = obterIdUsuarioAtual();
    const usuarioPath = '/usuario/' + usuarioId;
    const [user, setUser] = useState([]);
    // useEffect(() => {
    //     carregarDados(usuarioPath, setUser);
    // }, [usuarioPath]);


    return (
        <div className="d-flex align-items-center">
            <Avatar title={"Perfil"}>{user.name !== undefined ? (user.name)[0].toUpperCase() : "?"}</Avatar>
        </div>
    );
};

export default AvatarUsuario;