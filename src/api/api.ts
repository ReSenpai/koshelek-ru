import axios from 'axios';
import { DepthType } from '../types/types';

const binance = axios.create({
    baseURL: 'https://api.binance.com'
});

export const binanceAPI = {
    getDepth (symbol: string = 'BTCUSDT') {
        return binance.get<DepthType>(`/api/v3/depth?limit=500&symbol=${symbol}`)
        .then(response => response.data);
    },
    async streamDepth (symbol: string = 'BTCUSDT') {
        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@depth@1000ms`);
        const config = {
            "method": "SUBSCRIBE",
            "params": [
              `${symbol.toLowerCase()}@depth`
            ],
            "id": 1
        }

        ws.onopen  = function(e) {
            console.log("[open] Соединение установлено");
            console.log("Отправляем данные на сервер");
            ws.send(JSON.stringify(config));
        }
        
        ws.onclose = function(event) {
            if (event.wasClean) {
                console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
            } else {
                console.log('[close] Соединение прервано');
            }
        };
        
        ws.onerror = function(error: any) {
            console.log(`[error] ${error.message}`);
        };

        return ws;
    }
}