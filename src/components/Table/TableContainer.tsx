import React from 'react';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/store';
import { TableType } from '../../types/types';
import Tables from './Table';
import { getAsks, getBids } from '../../redux/exchange_selectors';

type MapStatePropsType = {
    asks: Array<TableType>
    bids: Array<TableType>
}
type MapDispatchPropsType = {
    
}
type OwnPropsType = {
}
export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const TableContainer: React.FC<PropsType> = (props) => {
    return (
        <Tables {...props} />
    );
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    asks: getAsks(state),
    bids: getBids(state)
}) 


export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    
})(TableContainer);