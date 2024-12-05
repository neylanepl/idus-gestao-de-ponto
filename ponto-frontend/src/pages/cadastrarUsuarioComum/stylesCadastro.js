import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const ContainerCadastro = styled.div`
  background: #eaece2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 80px;
`;

export const FormTitle = styled.h1`
  color: white;
  margin-bottom: 20px;
  min-width: 284px;
`;

export const FormContainer = styled.div`
  background: #2793ee;
  border-radius: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 60px;
`;

export const InputGroup = styled(Form.Group)`
  max-width: 384px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin-bottom: 10px;
`;

export const Label = styled(Form.Label)`
  font-weight: bold;
`;

