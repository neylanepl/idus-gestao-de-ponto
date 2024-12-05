import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Form } from 'react-bootstrap';

import ponto from '../../services/conexaoPontoApi';
import { login } from '../../services/autenticacao';
import { BotaoEstilizado } from '../../components/botoes.js';
import { EntradaComIcone, EntradaPequena } from '../../components/entradas.js';
import { ContainerLogin, Header, FormContainer, FormTitle, FormDescription, InputGroup, ButtonContainer, LinkTexto } from './stylesLogin.js';


const Login = () => {
  const [loginForm, setLogin] = useState('');
  const [senhaForm, setSenha] = useState('');

  const navigate = useNavigate();

  const handleSubmitForm = async e => {
    e.preventDefault();
    const payload = { login: loginForm, password: senhaForm };

    try {
      //const { data } = await ponto.post('/login', payload);
      // Implementação fictícia do login, pois não foi implementado o backend.
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.fakeTokenData.fakeSignature";
      const papel = loginForm; // Pode ser "adm" ou "comun"
      const id = 1;
      login(token, papel, id);
      if (papel === "comun") {
        navigate('/ponto');
      } else if (papel === "adm"){
        navigate('/cadastrousuario');
      }else{
        toast.error("Login incorreto!");
      }
      
    } catch (error) {
      let messageError = "Não foi possível realizar o login!";
      if (error.response?.data?.err) {
        messageError = error.response.data.err;
      }
      // toast.error(messageError);
    }
  };

  return (
    <ContainerLogin>
      <Header>Gestão de Ponto de Jornada de Trabalho</Header>
      <FormContainer>
        <FormTitle>Login</FormTitle>
        <FormDescription>Preencha os campos abaixo com o seu login e a senha.</FormDescription>
        <Form className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmitForm}>
          <InputGroup>
            <label>Login*</label>
            <Form.Group className="mb-3">
              <EntradaComIcone 
                input={
                  <EntradaPequena 
                    placeholder="Digite o seu login" 
                    type="text" 
                    required
                    value={loginForm}
                    onChange={e => setLogin(e.target.value)}
                  />
                } 
              />
            </Form.Group>
          </InputGroup>
          <InputGroup>
            <label>Senha*</label>
            <Form.Group>
              <EntradaComIcone 
                input={
                  <EntradaPequena 
                    placeholder="Digite sua senha" 
                    type="password"
                    required 
                    value={senhaForm} 
                    onChange={e => setSenha(e.target.value)}
                  />
                } 
              />
            </Form.Group>
          </InputGroup>
          <ButtonContainer>
            <BotaoEstilizado type="submit">Entrar</BotaoEstilizado>
          </ButtonContainer>
        </Form>
        <LinkTexto href="/">
          Esqueci minha senha
        </LinkTexto>
        <ToastContainer />
      </FormContainer>
    </ContainerLogin>
  );
};

export default Login;