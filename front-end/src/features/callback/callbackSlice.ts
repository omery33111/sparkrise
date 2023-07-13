import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postCallback } from './callbackAPI';
import { CallbackState } from '../../models/Callback';



const initialState: CallbackState = {
  callbacks: []
};



export const postCallbackAsync = createAsyncThunk(
  'callback/postCallback',
  async (callbackData: any) => {
  const response = await postCallback(callbackData);
  return response.data;
  }
);



export const callbackSlice = createSlice({
  name: 'callback',
  initialState,
  reducers: {
    do: (state) => {
    },

    },
  extraReducers: (builder) => {
    builder
      // .addCase(getSingleMonthAsync.fulfilled, (state, action) =>
      // {
      //   state.schedule = action.payload;
      // })

      .addCase(postCallbackAsync.fulfilled, (state, action) =>
      {
        state.callbacks = [...state.callbacks, action.payload];
      })
  },
});



// export const { do } = schedulerSlice.actions;

// export const selectAllMonths = (state: RootState) => state.scheduler.callback;

export default callbackSlice.reducer;
