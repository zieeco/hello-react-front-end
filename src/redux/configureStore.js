import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/.greetingReducer';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
