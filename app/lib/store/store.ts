import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';
import priceSlice from './slices/priceSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice,
        prices: priceSlice,
    },
})

// export type AppStore = ReturnType<typeof store.subscribe>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;