import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllMonths, getSingleMonth } from './schedulerAPI';
import { SchedulerState } from '../../models/Scheduler';
import { RootState } from '../../app/store';



const initialState: SchedulerState = {
  schedules: []
};



// export const getSingleMonthAsync = createAsyncThunk(
//   'scheduler/getSingleMonth',
//   async (id: string) => {
//     const response = await getSingleMonth(id);
//     return response.data;
//   }
// );



export const getAllMonthsAsync = createAsyncThunk(
  'scheduler/getAllMonths',
  async () => {
    const response = await getAllMonths();
    return response.data;
  }
);



export const schedulerSlice = createSlice({
  name: 'scheduler',
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

      .addCase(getAllMonthsAsync.fulfilled, (state, action) =>
      {
        state.schedules = action.payload
      })
  },
});



// export const { do } = schedulerSlice.actions;

export const selectAllMonths = (state: RootState) => state.scheduler.schedules;

export default schedulerSlice.reducer;
