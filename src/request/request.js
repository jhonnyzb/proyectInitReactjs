const axios = require('axios');

export function consultaClientes() {
    return axios.get('https://jsonplaceholder.typicode.com/posts', { timeout: 10000 })
  }
  