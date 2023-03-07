import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { men: [], women: [] };

const fetchAllCats = createAsyncThunk("fetch/categories", async () => {
  try {
    const allCats = await axios.get("http://localhost:10000/categories");
  } catch (error) {}
});
