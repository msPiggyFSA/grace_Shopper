import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { men: [], women: [] };

const fetchAllCats = createAsyncThunk("fetch/categories", async () => {
  try {
    const allCats = await axios.get("http://mspiggygraceshopper.onrender.com/categories");
  } catch (error) {}
});
