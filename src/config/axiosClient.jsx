import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `https://raw.githubusercontent.com/DennisMenjivar/Naipy/main/src/json/options.json`,
});

export default axiosClient;
