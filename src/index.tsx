import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from "./store/reducers/rootReducer";
import {sagaWatcher} from "./store/sagas/civilizationsSaga";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const saga = createSagaMiddleware();
const store = createStore(rootReducer, compose(
    applyMiddleware(
        saga
    )
));
saga.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
