


export interface Schedule {
    id?: string;
    month: string;
    year: number;
    days: number;
  }
  
  export interface SchedulerState {
    schedules: Schedule[];
    // saveMonth: string;
  }
