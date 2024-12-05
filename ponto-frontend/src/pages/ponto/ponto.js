import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import ponto, { carregarDados } from '../../services/conexaoPontoApi';
import { obterIdUsuarioAtual } from '../../services/autenticacao';
import Base from '../../components/base/baseConteudo.js'
import TabelaPontos from '../../components/tabela/tabela.js'
import { Container, Col8, Col4, ContainerRetangulos, InfoRetangulo, SecaoCabecalho, SecaoCartao, InfoContainer, InfoItem, Button, FotoPerfil } from './stylesPonto.js';


const Ponto = () => {
  const idUsuario = obterIdUsuarioAtual();
  const [dadosPontos, setDadosPontos] = useState([]);
  const [horasExcedidas, setHorasExcedidas] = useState("");
  const [horasPententes, setHorasPententes] = useState("");

  useEffect(() => {
      carregarDados(`/diaDeTrabalho/resumo/por-usuarioId/${idUsuario}`, setDadosPontos);
      carregarDados(`/diaDeTrabalho/horasExcedidas/por-usuarioId/${idUsuario}`, setHorasExcedidas);
      carregarDados(`/diaDeTrabalho/previsaoCompletarJornada/por-usuarioId/${idUsuario}`, setHorasPententes);
  }, []);

  const handleSubmitForm = async e => {
    e.preventDefault();

    try {
      await ponto.post('/ponto/1');
      toast.success("Ponto registrado!");

      carregarDados('/diaDeTrabalho/resumo/por-usuarioId/1', setDadosPontos);
      carregarDados('/diaDeTrabalho/horasExcedidas/por-usuarioId/1', setHorasExcedidas);
      carregarDados('/diaDeTrabalho/previsaoCompletarJornada/por-usuarioId/1', setHorasPententes);
    } catch (error) {
      let messageError = "Não foi possível registrar o ponto!";
      if (error.response?.data?.err) {
        messageError = error.response.data.err;
      }
      toast.error(messageError);
    }
  };
  
  return (
     <Base>     
          <Container>
            <Col8>
              <SecaoCabecalho>Resumo de Jornada do Dia</SecaoCabecalho>
              <TabelaPontos pontosDoDia={dadosPontos.pontosDoDia}/>
              <ContainerRetangulos>
                <SecaoCartao>
                  <InfoRetangulo>
                    <InfoItem><strong>Horas Excedidas</strong> </InfoItem>
                    <InfoItem>{horasExcedidas.horasExcedidas}</InfoItem>
                  </InfoRetangulo>
                </SecaoCartao>
                <SecaoCartao>
                  <InfoRetangulo>
                    <InfoItem><strong>Horas Pendentes</strong> </InfoItem>
                    <InfoItem>{horasPententes.previsaoCompletarJornada}</InfoItem>
                  </InfoRetangulo>
                </SecaoCartao>
              </ContainerRetangulos>
            </Col8>
            <Col4>
              <SecaoCabecalho>Registro de Ponto</SecaoCabecalho>
              <SecaoCartao>
                <FotoPerfil/>
                <InfoContainer>
                  <InfoItem><strong>Nome:</strong> João Silva</InfoItem>
                  <InfoItem><strong>Cargo:</strong> Desenvolvedor</InfoItem>
                  <InfoItem><strong>Empresa:</strong> TechCorp</InfoItem>
                </InfoContainer>
              </SecaoCartao>
              <Button type="submit" onClick={(handleSubmitForm)}>
                Registrar Ponto
              </Button>
            </Col4>
          </Container>
    </Base>
  );
};
  
export default Ponto;