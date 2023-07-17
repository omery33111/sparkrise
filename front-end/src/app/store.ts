import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import schedulerReducer from '../features/scheduler/schedulerSlice';
import callbackReducer from '../features/callback/callbackSlice';
import authenticationReducer from '../features/authentication/authenticationSlice';
import appointmentReducer from '../features/appointment/appointmentSlice';
import administratorReducer from '../features/administrator/administratorSlice';



export const store = configureStore({
  reducer: {
    scheduler: schedulerReducer,
    callback: callbackReducer,
    authentication: authenticationReducer,
    appointment: appointmentReducer,
    administrator: administratorReducer
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
