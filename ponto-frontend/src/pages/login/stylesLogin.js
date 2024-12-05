import styled from 'styled-components';
import { Form, Nav } from 'react-bootstrap';

export const ContainerLogin = styled.div`
  background: #2793ee;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const FormContainer = styled.div`
  background: #eaece2;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 40px 10px 40px;
`;

export const FormTitle = styled.h1`
  color: #2793ee;
  margin-bottom: 20px;
  min-width: 284px;
`;

export const FormDescription = styled.h6`
  max-width: 284px;
  margin-bottom: 30px;
`;

export const InputGroup = styled(Form.Group)`
  max-width: 284px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled(Form.Group)`
  margin-bottom: 8px;
`;

export const Label = styled(Form.Label)`
  font-weight: bold;
`;

export const LinkTexto = styled(Nav.Link)`
  color: #2793ee;
  font-size: 12px;
  font-weight: bold;
  padding-rigth: 0px;
  margin-bottom: 38px;
`;