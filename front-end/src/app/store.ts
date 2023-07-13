import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import schedulerReducer from '../features/scheduler/schedulerSlice';
import callbackReducer from '../features/callback/callbackSlice';

export const store = configureStore({
  reducer: {
    scheduler: schedulerReducer,
    callback: callbackReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
