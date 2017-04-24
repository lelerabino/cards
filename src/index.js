import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/singleReducer';
import App from './components/App';
import {get as getPersistedState} from './localStore';
import cards from './cards';
import shuffle from'./shuffle';
import './index.css';

const initialState = {
  cards: shuffle(cards),
  numberOfPlayers: 4
};

const store = createStore(reducer, getPersistedState() || initialState);

function run() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

run();