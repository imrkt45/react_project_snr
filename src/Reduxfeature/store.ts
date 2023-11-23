import { configureStore } from '@reduxjs/toolkit';
import resourceReducer, { deletedResourceReducer } from '../Reduxfeature/userslice';

export const store = configureStore({
  reducer: {
    resource: resourceReducer,
    deletedResource: deletedResourceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
