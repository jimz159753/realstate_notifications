import React from 'react';
import Routes from './src/components/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};



export default App;
