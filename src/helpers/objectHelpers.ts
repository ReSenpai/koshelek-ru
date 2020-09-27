import { TableType } from './../types/types';

let counter = 0;

export const depthMapToTable = (array: Array<Array<string>>): Array<TableType> => {
    return array.map(arr => ({
        amount: arr[0],
        price: arr[1],
        total: (+arr[0] * +arr[1]).toFixed(8),
        id: counter++
    }));
}

export const cleanDepthArr = (array: Array<Array<string>>): Array<Array<string>> => {
    return array.filter(arr => +arr[1] !== 0);
}