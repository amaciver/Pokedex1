import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';
import { createLogger } from 'redux-logger';

// const logger = createLogger();
const configureStore = () => (
  createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
);

export default configureStore;
