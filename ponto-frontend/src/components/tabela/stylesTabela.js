import styled from 'styled-components';

export const StyledTabela = styled.table`
  width: 94%;
  border-spacing: 0; 
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CabecalhoTabela = styled.thead`
  color: #212529;

  th {
    padding: 12px;
    font-size: 16px;
  }
`;

export const CelulaTabela = styled.td`
  padding: 12px;
  font-size: 16px;
`;