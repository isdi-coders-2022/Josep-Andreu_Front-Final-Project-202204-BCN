import { createSlice } from "@reduxjs/toolkit";

interface userState {
  name: string;
  username: string;
  id: string;
  logged: boolean;
}

const initialState: userState = {
  name: "",
  username: "",
  id: "",
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
