import styled from 'styled-components';
import { PersonCircle } from '@styled-icons/bootstrap/PersonCircle';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: stretch;
  gap: 16px;
  background-color: #eaece2;
  padding: 50px 80px;

  @media (max-width: 853px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

export const Col8 = styled.div`
  flex: 0 0 66.66%; /* 8/12 */
  padding: 16px;
  background-color: #2793ee;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: space-between; 
  padding: 60px 20px;

  @media (max-width: 853px) {
    flex: none;
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const Col4 = styled.div`
  flex: 0 0 33.33%; /* 4/12 */
  padding: 16px;
  background-color: #2793ee;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; 
  align-items: center;   
  justify-content: space-between;
  padding: 60px 20px; 

  @media (max-width: 853px) {
    flex: none;
    width: 100%;
  }
`;

export const ContainerRetangulos = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
`;

export const SecaoCabecalho = styled.h1`
  font-size: 30px;
  color: white;
`;

export const SecaoCartao = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: center;
  margin-bottom: 16px;
  padding: 20px 20px 12px 20px;
  border-radius: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: center;
  margin-top: 40px;
`;

export const InfoRetangulo = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;    
  justify-content: space-between;
  padding: 14px 0px;
`;

export const InfoItem = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
`;

export const FotoPerfil = styled(PersonCircle)`
  width: 100px;
  height: 100px;
`;