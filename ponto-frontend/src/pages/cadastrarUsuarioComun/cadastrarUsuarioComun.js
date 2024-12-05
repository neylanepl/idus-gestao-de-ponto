import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Form } from 'react-bootstrap';

import ponto from '../../services/conexaoPontoApi';
import Base from '../../components/base/baseConteudo';
import { BotaoEstilizadoBranco } from '../../components/botoes.js';
import { EntradaComIcone, EntradaMedia, SelectMedio } from '../../components/entradas.js';
import {ContainerCadastro, FormContainer, FormTitle, Label, InputGroup} from './stylesCadastro'


const CadastrarUsuarioComun = () => {

    const [nomeForm, setNome] = useState('');
    const [loginForm, setLogin] = useState('');
    const [senhaForm, setSenha] = useState('');
    const [tipoRegimeForm, setTipoRegime] = useState('');
    const [cargoForm, setCargo] = useState('');
    const [empresaForm, setEmpresa] = useState('');
    

    const navigate = useNavigate();

    const handleSubmitForm = async e => {
        e.preventDefault();
        const payload = {
            nome: nomeForm,
            login: loginForm,
            senha: senhaForm,
            tipoDeRegime: tipoRegimeForm,
            cargo: cargoForm,
            empresa: empresaForm
        };

        try {
            const { data } = await ponto.post('/usuario/comum', payload);
            toast.success("Cadastro realizado com sucesso!")
            navigate('/cadastrarusuariocomun');
        } catch (error) {
            toast.error("Cadastro falhou!");
        }
    };

    return (
        <Base>
            <ContainerCadastro>
                <FormContainer>
                    <FormTitle>Cadastro de Usuário Comun</FormTitle>
                    <Form className="d-flex flex-column justify-content-center" onSubmit={e => { handleSubmitForm(e) }}>
                        <InputGroup>
                            <Label>Nome*</Label>
                            <Form.Group className="mb-3">
                                <EntradaComIcone 
                                    input={
                                    <EntradaMedia 
                                        placeholder="Digite o nome" 
                                        type="text" 
                                        required
                                        value={nomeForm}
                                        onChange={e => setNome(e.target.value)}
                                    />
                                    } 
                                />
                            </Form.Group>
                        </InputGroup>
                        <InputGroup>
                            <Label>Login*</Label>
                            <Form.Group className="mb-3">
                                <EntradaComIcone 
                                    input={
                                    <EntradaMedia 
                                        placeholder="Digite o login" 
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
                            <Label>Senha*</Label>
                            <Form.Group className="mb-3">
                                <EntradaComIcone 
                                    input={
                                    <EntradaMedia 
                                        placeholder="Digite a senha" 
                                        type="password" 
                                        required
                                        value={senhaForm}
                                        onChange={e => setSenha(e.target.value)}
                                    />
                                    } 
                                />
                            </Form.Group>
                        </InputGroup>
                        <InputGroup>
                            <Label>Tipo de regime*</Label>
                            <Form.Group className="mb-3">
                                <SelectMedio required onChange={e => setTipoRegime(e.target.value)} defaultValue="">
                                        <option value="" disabled>Selecione o tipo de regime</option>
                                        <option value="SEISHORAS">6 Horas</option>
                                        <option value="OITOHORAS">8 Horas</option>
                                </SelectMedio>
                            </Form.Group>
                        </InputGroup>
                        <InputGroup>
                            <Label>Cargo*</Label>
                            <Form.Group className="mb-3">
                                <EntradaComIcone 
                                    input={
                                    <EntradaMedia 
                                        placeholder="Digite o cargo" 
                                        type="text" 
                                        required
                                        value={cargoForm}
                                        onChange={e => setCargo(e.target.value)}
                                    />
                                    } 
                                />
                            </Form.Group>
                        </InputGroup>
                        <InputGroup>
                            <Label>Empresa*</Label>
                            <Form.Group className="mb-3">
                                <EntradaComIcone 
                                    input={
                                    <EntradaMedia 
                                        placeholder="Digite a empresa" 
                                        type="text" 
                                        required
                                        value={empresaForm}
                                        onChange={e => setEmpresa(e.target.value)}
                                    />
                                    } 
                                />
                            </Form.Group>
                        </InputGroup>        
                        <Form.Group className="mb-1 mt-4">
                            <BotaoEstilizadoBranco type="submit">Cadastrar</BotaoEstilizadoBranco>
                            <ToastContainer />
                        </Form.Group >
                    </Form>
                </FormContainer>
            </ContainerCadastro>
        </Base>
    );
};

export default CadastrarUsuarioComun;