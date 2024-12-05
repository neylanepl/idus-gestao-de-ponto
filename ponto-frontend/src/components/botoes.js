import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const BotaoEstilizadoAzul = styled(Button)`
    margin: ${props => props.margem ? "auto" : "40px"};
    font-weight: bold;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background: #2793EE;
    min-width: 284px;
    height: 44px;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #6A6A6A;
      color: #E5DBDB;
    }
`;

export const BotaoEstilizadoBranco = styled.button`
  width: 80%;
  padding: 10px;
  background-color: white;
  color: #2793ee;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #eaece2;
  }
`;

const BotaoComBorda = styled(Button)`
    margin: ${props => props.margem ? "auto" : "0"};
    font-weight: bold;
    color: black;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 1em;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #6A6A6A;
      border: #6A6A6A;
      color: #E5DBDB;
    }
`;

export const BotaoComBordaPersonalizado = (props) => {
  let name = props.comIcone ? 'd-flex align-items-center' : '';
  return (
    <BotaoComBorda className={name} 
      onClick={props.onClick}
      variant="outline-warning">
      {props.children}
    </BotaoComBorda>
  );
}