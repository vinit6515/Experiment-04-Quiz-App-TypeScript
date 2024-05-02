import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});

export default store;

// Types
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
