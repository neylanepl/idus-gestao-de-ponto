import React, { useState } from 'react';
import { toast } from 'react-toastify';

import ponto from '../../services/conexaoPontoApi';
import Base from '../../components/base/baseConteudo.js'
import TabelaPontos from '../../components/tabela/tabela.js'
import { Container, Col8, Col4, ContainerRetangulos, InfoRetangulo, SecaoCabecalho, SecaoCartao, InfoContainer, InfoItem, Button, FotoPerfil } from './stylesPonto.js';


const Ponto = () => {

  const [dadosPontos, setDadosPontos] = useState([]);
  const [horasExcedidas, setHorasExcedidas] = useState("");
  const [horasPententes, setHorasPententes] = useState("");

  const handleSubmitForm = async e => {
    e.preventDefault();

    try {
      await ponto.post('/ponto/1');
      toast.success("Ponto registrado!");
      const {data: dadosResumo} = await ponto.get('/diaDeTrabalho/resumo/por-usuarioId/1');
      setDadosPontos(dadosResumo.pontosDoDia);
      const {data: dadoHorasExcedidas} = await ponto.get('/diaDeTrabalho/horasExcedidas/por-usuarioId/1');
      setHorasExcedidas(dadoHorasExcedidas.horasExcedidas);
      const {data: dadosPrevisaoCompletarJornada} = await ponto.get('/diaDeTrabalho/previsaoCompletarJornada/por-usuarioId/1');
      setHorasPententes(dadosPrevisaoCompletarJornada.previsaoCompletarJornada);
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
              <TabelaPontos pontosDoDia={dadosPontos}/>
              <ContainerRetangulos>
                <SecaoCartao>
                  <InfoRetangulo>
                    <InfoItem><strong>Horas Excedidas</strong> </InfoItem>
                    <InfoItem>{horasExcedidas}</InfoItem>
                  </InfoRetangulo>
                </SecaoCartao>
                <SecaoCartao>
                  <InfoRetangulo>
                    <InfoItem><strong>Horas Pendentes</strong> </InfoItem>
                    <InfoItem>{horasPententes}</InfoItem>
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