import { combineReducers } from 'redux';
import searchLists from './searchLists';
import IStoreState from '../store/IStoreState';

const reducers = combineReducers<IStoreState>({
    searchLists,
});

export default reducers;