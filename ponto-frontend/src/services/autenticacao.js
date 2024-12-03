export const CHAVE_TOKEN = "@token";
export const PAPEL_USUARIO = "@role";
export const ID_USUARIO = "@user_id";

export const estaAutenticado = () => localStorage.getItem(CHAVE_TOKEN) !== null;

export const obterToken = () => localStorage.getItem(CHAVE_TOKEN);

export const obterPapelAtualUsuario = () => {
    return JSON.parse(localStorage.getItem(PAPEL_USUARIO));
};

export const obterIdUsuarioAtual = () => localStorage.getItem(ID_USUARIO);

export const login = (token, papel, id) => {
    localStorage.setItem(CHAVE_TOKEN, token);
    localStorage.setItem(PAPEL_USUARIO, papel);
    localStorage.setItem(ID_USUARIO, id);
};

export const logout = () => {
    localStorage.removeItem(CHAVE_TOKEN);
    localStorage.removeItem(PAPEL_USUARIO);
    localStorage.removeItem(ID_USUARIO);
};