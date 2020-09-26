import axios from 'axios';

const binance = axios.create({
    // withCredentials: true,
    baseURL: 'https://api.binance.com',
    // headers: {
    //     apiKey: 'lMVaebhHxqx5vB9XJN0eIeUQUj5ceCUAu4yefQOyqDiafCulqChseOjZLO4iheof',
    //     secretKey: 'IDrxYp43fDC6BqxxsDDn84pYyNZLsfhqEOBkPwObSFzOuNpFURiVITvhPpt2zCuZ',
    //     "proxy": "http://localhost:3000",
    // }
});

export const binanceAPI = {
    ping () {
        return binance.get(`/api/v3/depth`)
        .then(response => response.data);
    }
}