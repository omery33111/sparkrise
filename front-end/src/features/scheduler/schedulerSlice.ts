import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllMonths, postMonth } from './schedulerAPI';
import { SchedulerState } from '../../models/Scheduler';
import { RootState } from '../../app/store';



const initialState: SchedulerState = {
  schedules: [],
  // saveMonth: ""
};



export const getAllMonthsAsync = createAsyncThunk(
  'scheduler/getAllMonths',
  async () => {
    const response = await getAllMonths();
    return response.data;
  }
);



export const postMonthAsync = createAsyncThunk('scheduler/postMonth', async () => {
  const response = await postMonth();
  return response.data;
});




export const schedulerSlice = createSlice({
  name: 'scheduler',
  initialState,
  reducers: {
    // doPostMonth: (state, action) => {
    //   state.saveMonth = action.payload
    // },

    },
  extraReducers: (builder) => {
    builder
      // .addCase(postMonthAsync.fulfilled, (state, action) => {
      //   state.saveMonth = action.payload;
      // })

      .addCase(getAllMonthsAsync.fulfilled, (state, action) =>
      {
        state.schedules = action.payload
      })
  },
});



// export const { doPostMonth } = schedulerSlice.actions;

export const selectAllMonths = (state: RootState) => state.scheduler.schedules;
// export const selectSaveMonth = (state: RootState) => state.scheduler.saveMonth;

export default schedulerSlice.reducer;
