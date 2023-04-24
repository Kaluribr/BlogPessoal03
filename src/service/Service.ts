import axios from "axios";

export const api = axios.create({
  baseURL: "https://blogpessoal-5xm2.onrender.com",
});
export const cadastroUsuario = async (
  url: string,
  dados: Object,
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};
/*export const login = (url: any(no video), dados: Object, setDados: Function) => {} */
export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data.token);
};
// a tipagem do headers seria um object
export const getAll = async (url: any, setDados: any, headers: any) => {
  const resposta = await api.get(url, headers);
  setDados(resposta.data);
};

export const buscaId = async(url: any,setDado: any, header: any) => { 
  const resposta = await api.get(url,header)
  setDado(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => { 
  const resposta = await api.post(url,dados,header)
  setDado(resposta.data)
}

export const put = async(url: any, dados: any, setDado: any, header: any) => { 
  const resposta = await api.put(url,dados,header)
  setDado(resposta.data)
}

export const deleteId = async(url: any,header: any) => { 
  await api.delete(url,header)
}