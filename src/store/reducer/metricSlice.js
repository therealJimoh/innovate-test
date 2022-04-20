import { createSlice } from "@reduxjs/toolkit";


// const initialState = {
//   metricsData: null,
//   isLoading: false,
//   isError: false,
//   isSuccess: false,
// };

// export const getMetric = createAsyncThunk(
//   "aauth/getMetric",
//   async (thunkAPI) => {
//     try {
//       const metricData = db ;
//       return metricData;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

export const metricSlice = createSlice({
  name: "metric",
  initialState:{},
  reducers: {
   getMetric() {},
   setMetric(state, action) {
    const metricData = action.payload;
    return {...state, ...metricData}
   }
  }
});

export const { getMetric, setMetric } = metricSlice.actions;

export default metricSlice.reducer;
