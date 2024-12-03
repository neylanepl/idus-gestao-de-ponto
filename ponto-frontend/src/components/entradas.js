import React from 'react';
import styled, { css } from 'styled-components';
import { Form } from 'react-bootstrap';

export const Entrada = styled.input`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: ${props => props.isWithIcon ? "11px 10px" : "6px 12px"};
    color: ${ theme.colors.black };
    background: ${ theme.colors.white };
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: ${ theme.fonts.family.default };
    font-size: 1rem;
  `}
`;

export const EntradaMedia = styled(Entrada)`
  width: 100%;
  min-width: 210px;
  height: 44px;
`;

export const EntradaPequena = styled(Entrada)`
  width: 100%;
  min-width: 284px;
  height: 44px;
`;

export const EntradaGrande = styled(Entrada)`
    width: 100%;
    min-width: 210px;
    height: 44px;
`;

export const EntradaFormulario = styled.input`
  padding: 11px 37px;
  width: 382.71px;
  height: 44px;
  left: 529px;
  top: 293px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 5px;
`;

export const EntradaComIcone = (props) => {
  return (
      <div className="d-flex">
          <div style={{
                  position: "absolute", 
                  marginTop: "11px", 
                  marginLeft: "15px"}}>
              {props.icon}
          </div> 
          {props.input}
      </div>
  );
}

export const AreaDeTextoEstilizada = styled(Form.Control)`
  ${({ theme }) => css`
    display: block;
    width: 100%;
    padding: ${props => props.isWithIcon ? "11px 37px" : "6px 12px"};
    color: ${ theme.colors.black };
    background: ${ theme.colors.white };
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: ${ theme.fonts.family.default };
    font-size: 1rem;
    margin-bottom: 20px;
  `}
`;

export const AreaDeTexto = (props) => {
  
  return (
    <AreaDeTextoEstilizada as="textarea"  
        style={{marginBottom: "20px"}}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onchange}/>
  );
}