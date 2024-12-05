import React, { useState, useEffect } from 'react';

import { Avatar} from './stylesNavBar';
import { carregarDados } from '../../services/conexaoPontoApi';
import { obterIdUsuarioAtual, obterPapelAtualUsuario } from '../../services/autenticacao';

const AvatarUsuario = () => {  
    let usuarioId = obterIdUsuarioAtual();
    const usuarioPath = '/usuario/' + usuarioId;
    const [user, setUser] = useState({nome: obterPapelAtualUsuario()});
    // useEffect(() => {
    //     carregarDados(usuarioPath, setUser);
    // }, [usuarioPath]);

    return (
        <div className="d-flex align-items-center">
            <Avatar title={"Perfil"}>{user.nome !== undefined ? (user.nome)[0].toUpperCase() : "?"}</Avatar>
        </div>
    );
};

export default AvatarUsuario;