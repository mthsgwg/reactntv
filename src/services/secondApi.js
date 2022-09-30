import axios from 'axios';

const secondApi = axios.create({
  baseURL:
    // 'https://novosite.ntv.tv.br/api/apiMateriasHome.php?inicio=0&limite=60',
    'https://api.ntv.tv.br',
});

export default secondApi;
