import axios from 'axios';

const URL = 'https://swapi.co/api';

const getEntityList = (entityType, page) => axios.get(`${URL}${entityType}/`, { params: { page } });
const getEntityById = (entityType, id) => axios.get(`${URL}${entityType}/${id}`);
const getEntityByUrl = url => axios.get(url);

export default {
  getEntityList,
  getEntityById,
  getEntityByUrl,
};
