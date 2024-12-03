import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const ContainerLogin = styled.div`
  background: #2793ee;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h1`
  color: white;
  margin-bottom: 40px;
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

export const InputGroup = styled.div`
  max-width: 284px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled(Form.Group)`
  margin-bottom: 30px;
`;