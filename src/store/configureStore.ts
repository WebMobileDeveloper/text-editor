import { createStore, applyMiddleware } from 'redux';
// Import thunk middleware
import thunk from 'redux-thunk';
import reducers from '../reducers';
import IStoreState from './IStoreState';



export default function configureStore(initialState: IStoreState) {
  const store = createStore<IStoreState>(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}
