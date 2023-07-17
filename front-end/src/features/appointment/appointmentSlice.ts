import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppointmentState } from '../../models/Appointment';
import { getAppointments, postAppointment } from './appointmentAPI';
import { RootState } from '../../app/store';



const initialState: AppointmentState = {
  appointments: [],
  selectedDate: 0
};



export const postAppointmentAsync = createAsyncThunk(
  'appointment/postAppointment',
  async (AppointmentData: any) => {
  const response = await postAppointment(AppointmentData);
  return response.data;
  }
);



export const getAppointmentsAsync = createAsyncThunk(
  'appointment/getAppointments',
  async () => {
    const response = await getAppointments();
    return response.data;
  }
);




export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    selectDay: (state, action) => {
      state.selectedDate = action.payload;
    },

    },
  extraReducers: (builder) => {
    builder
      .addCase(getAppointmentsAsync.fulfilled, (state, action) =>
      {
        state.appointments = action.payload
      })

      .addCase(postAppointmentAsync.fulfilled, (state, action) =>
      {
        state.appointments = [...state.appointments, action.payload];
      })
  },
});



export const { selectDay } = appointmentSlice.actions;

export const selectSelectedDay = (state: RootState) => state.appointment.selectedDate;
export const selectAppointments = (state: RootState) => state.appointment.appointments;

export default appointmentSlice.reducer;
