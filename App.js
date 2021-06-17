import React, { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/redux/store';
import MessageScreen from './src/components/MessagesScreen';


const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MessageScreen />
      </PersistGate>
    </Provider >
  );
};

export default App;
