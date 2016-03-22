'use strict';

import React from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux/native';
import App from './app/containers/App';
import chatApp from './app/reducers';

const {
  AppRegistry,
  View
} = React;

const store = createStore(chatApp);
const reactNativeMessanger = React.createClass({
  render: function() {
    return(
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
});

AppRegistry.registerComponent('reactNativeMessanger', () => reactNativeMessanger);
