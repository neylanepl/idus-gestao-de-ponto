import axios from 'axios';
import { obterToken } from './autenticacao';

const baseURL = 'http://localhost:8080';

const ponto = axios.create({
    baseURL 
});

ponto.interceptors.request.use(async config => {
    const token = obterToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const carregarDados = async (caminho, atualizarDados) => {
  const resultado = await ponto.get(caminho);
  atualizarDados(resultado.data);
}

export const atualizarDados = async (caminho, payload) => {
  if(payload)
    return await ponto.put(caminho, payload);
  else
    return await ponto.put(caminho);
}

export const excluirDados = async (caminho) => {
  await ponto.delete(caminho);
}

export default ponto;