import { depthMapToTable, cleanDepthArr } from './../helpers/objectHelpers';
import { TableType, BidsType, DepthStreamType, AsksType } from './../types/types';
import { AppStateType } from "./store";
import { ThunkAction } from "redux-thunk";
import { binanceAPI } from "../api/api";

const SET_BIDS = 'exchange/SET_BIDS';
const SET_ASKS = 'exchange/SET_ASKS';
const UPDATE_BIDS = 'exchange/UPDATE_BIDS';
const UPDATE_ASKS = 'exchange/UPDATE_ASKS';

let initialState = {
    initially: true as boolean,
    bids: [] as Array<TableType>,
    asks: [] as Array<TableType>
};
export type InitialStateType = typeof initialState;

const exchangeReducer = (state = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_BIDS: {
            return {
                ...state,
                bids: [...depthMapToTable(action.bids)]
            }
        }
        case SET_ASKS: {
            return {
                ...state,
                asks: [...depthMapToTable(action.asks)]
            }
        }
        case UPDATE_BIDS: {
            return {
                ...state,
                bids: [
                    ...depthMapToTable(action.bids), 
                    ...state.bids.slice(0, -(action.bids).length)
                ]
            }
        }
        case UPDATE_ASKS: {
            return {
                ...state,
                asks: [
                    ...depthMapToTable(action.asks), 
                    ...state.asks.slice(0, -(action.asks).length)
                ]
            }
        }
        default:
            return state;
    }  
}

// Actions
type ActionsTypes = SetBidsDataActionType | setAsksDataActionType | UpdateBidsActionType 
    | UpdateAsksActionType;
type SetBidsDataActionType = {
    type: typeof SET_BIDS
    bids: BidsType
}
export const setBidsData = ( bids: BidsType ): SetBidsDataActionType => ({ 
    type: SET_BIDS, 
    bids 
});
type setAsksDataActionType = {
    type: typeof SET_ASKS
    asks: AsksType
}
export const setAsksData = ( asks: AsksType ): setAsksDataActionType => ({ 
    type: SET_ASKS, 
    asks 
});
type UpdateBidsActionType = {
    type: typeof UPDATE_BIDS
    bids: BidsType
}
export const updateBidsData = ( bids: BidsType ): UpdateBidsActionType => ({ 
    type: UPDATE_BIDS, 
    bids 
});
type UpdateAsksActionType = {
    type: typeof UPDATE_ASKS
    asks: AsksType
}
export const updateAsksData = ( asks: AsksType ): UpdateAsksActionType => ({ 
    type: UPDATE_ASKS, 
    asks 
});


// Thunks
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getDepth = (symbol: string): ThunkType => async (dispatch) => {
    const ws = await binanceAPI.streamDepth(symbol);
    const response = await binanceAPI.getDepth(symbol);
    dispatch(setBidsData(response.bids));
    dispatch(setAsksData(response.asks));
    
    console.log(response)
    ws.onmessage = function(event) {
        const streamObj: DepthStreamType = JSON.parse(event.data);
        if (streamObj.u && streamObj.u >= response.lastUpdateId) {
            dispatch(updateBidsData(cleanDepthArr(streamObj.b)));
            dispatch(updateAsksData(cleanDepthArr(streamObj.a)));
        }
    };
}


export default exchangeReducer;