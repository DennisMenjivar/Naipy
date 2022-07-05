import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `https://github.com/DennisMenjivar/Naipy/blob/main/src/json/options.js`,
});

export default axiosClient;
