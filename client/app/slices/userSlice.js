import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { users: [], singleUser: {} };

export const fetchAllUsers = createAsyncThunk("allusers", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/users");
    const data = response.data;
    console.log("######THIS IS######", data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state, action) => {
        state.users.length = 0;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
