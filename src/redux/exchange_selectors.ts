import { AppStateType } from "./store";

export const getInitially = (state: AppStateType) => state.exchangePage.initially;
export const getBids = (state: AppStateType) => state.exchangePage.bids;
export const getAsks = (state: AppStateType) => state.exchangePage.asks;