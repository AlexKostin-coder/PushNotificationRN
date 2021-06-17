import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from './reducers';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
}

// AsyncStorage.clear();

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, composeWithDevTools({})(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { store, persistor }