import axios from 'axios';

const URL = 'https://swapi.co/api';

const getEntity = (name, page) => axios.get(`${URL}${name}/`, { params: { page } });

export default {
  getEntity,
};
