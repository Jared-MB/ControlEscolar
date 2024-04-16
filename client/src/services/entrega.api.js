import axios from 'axios'


const api = axios.create({
    baseURL: "http://150.230.40.105/api/v1/Entrega"
  });

export const getAllEntregas = () => {
    return api.get('/');
}

export const createEntrega = (entrega) => {
    return api.post('/', entrega);
}

export const deleteEntrega = (id) => {
    return api.delete(`/${id}/`);
}


export const getEntrega = (id, entrega) => {
    return api.get(`/${id}/`, entrega);
}

export const getEntregasByNRC = (nrc) => {
    return api.get(`/getEntregasByNRC/?nrc=${nrc}`); 
}

export const updateEntrega = (id, entrega) => api.patch(`/${id}/`,entrega);