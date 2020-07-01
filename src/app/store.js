import { configureStore } from '@reduxjs/toolkit';
import { mechanicsReducer } from '../features/mechanics/mechanicsSlice';
import { cardReducer } from '../features/cardSearch/cardSearchSlice';

export default configureStore({
  reducer: {
    mechanics: mechanicsReducer,
    card: cardReducer,
  },
});
