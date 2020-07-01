import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { dataReducer } from '../features/home/homeSlice';
import { cardReducer } from '../features/cardSearch/cardSearchSlice';

export default configureStore({
  reducer: {
    data: dataReducer,
    card: cardReducer,
  },
});
