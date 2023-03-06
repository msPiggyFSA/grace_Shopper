import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { users: [], singleUser: [] };

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

export const fetchSingleUser = createAsyncThunk("singleuser", async (id) => {
  try {
    const response = await axios.get("http://localhost:8080/api/users/" + id);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const editUserProfile = createAsyncThunk(
  "edituserprofile",
  async ({edit, params}) => {
    console.log(params, 'this is id in slice###############')
    console.log(edit, 'this is edit in slice############')
    try {
      await axios.patch(
        `http://localhost:8080/api/users/${edit.id}`, edit
      );
    } catch (error) {
      console.log(error);
    }
  }
);

export const createNewUser = createAsyncThunk(
  "createUser",
  async ({ form }) => {
    console.log(form);
    try {
      const newUser = await axios.post("http://localhost:8080/api/users", form);
      return newUser.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

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
      .addCase(fetchSingleUser.pending, (state, action) => {
        state.singleUser = {};
      })
      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.singleUser = action.payload;
<<<<<<< HEAD
      });
=======
      })
      .addCase(editUserProfile.pending, (state, action) => {
        state.singleUser = {};
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.singleUser = action.payload;
      })
>>>>>>> 6a69fe63b21979612403725a69826c4978b5b2b6
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
