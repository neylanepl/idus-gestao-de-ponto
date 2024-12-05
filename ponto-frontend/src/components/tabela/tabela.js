import React from "react";

import { StyledTabela, CabecalhoTabela, CelulaTabela} from './stylesTabela.js';


const TabelaPontos = ({ pontosDoDia }) => {
  const pontosAgrupados = [];
  if (Array.isArray(pontosDoDia)) {
    for (let i = 0; i < pontosDoDia.length; i += 2) {
        pontosAgrupados.push({
          entrada: pontosDoDia[i] || null,
          saida: pontosDoDia[i + 1] || null,
        });
      }
  }
  
  return (
    <StyledTabela className="table table-bordered">
      <CabecalhoTabela>
        <tr>
          <th scope="col">Entrada</th>
          <th scope="col">Saída</th>
        </tr>
      </CabecalhoTabela>
      <tbody>
        {pontosAgrupados.length > 0 ? (
          pontosAgrupados.map((ponto, index) => (
            <tr key={index}>
              <CelulaTabela>
                {ponto.entrada ? `${ponto.entrada.hora}` : "-"}
              </CelulaTabela>
              <CelulaTabela>
                {ponto.saida ? `${ponto.saida.hora}` : "-"}
              </CelulaTabela>
            </tr>
          ))
        ) : (
          <tr>
            <CelulaTabela>-</CelulaTabela>
            <CelulaTabela>-</CelulaTabela>
          </tr>
        )}
      </tbody>
    </StyledTabela>
  );
};

export default TabelaPontos;
