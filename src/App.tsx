import React, { lazy, useEffect } from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import { withSuspense } from './hoc/withSuspense';
import { getInitially } from './redux/exchange_selectors';
import { AppStateType } from './redux/store';
import { getDepth } from './redux/exchange_reducer';

const TableContainer = lazy(() => import('./components/Table/TableContainer'));
const RunningLineContainer = lazy(() => import('./components/RunningLine/RunningLineContainer'));

type MapStatePropsType = {
  initially: boolean
}
type MapDispatchPropsType = {
  getDepth: (symbol: string) => void
}
type OwnPropsType = {
}
export type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const App: React.FC<PropsType> = (props) => {

  useEffect(() =>{
    props.getDepth('ETHBTC');
  }, [props.initially])

  return (
    <HashRouter>
      <HeaderContainer />
      <Switch>
        <Route exact path='/' render={ () => <Redirect to={'/table'} />} />

        <Route path='/table' render={ withSuspense(TableContainer)} />

        <Route path='/running-line' render={ withSuspense(RunningLineContainer)} />
      </Switch>
    </HashRouter>
  );
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  initially: getInitially(state)
}) 


export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { 
  getDepth
})(App);
