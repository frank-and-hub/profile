import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice';
import priceSlice from './slices/priceSlice';
import workSlice from './slices/workSlice';
import servicesSlice from './slices/servicesSlice';

export const store = configureStore({
    reducer: {
        users: usersSlice,
        prices: priceSlice,
        works: workSlice,
        services: servicesSlice,
    },
})

// export type AppStore = ReturnType<typeof store.subscribe>
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;