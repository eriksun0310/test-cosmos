import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    age: 0,
    login:false
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setLogin(state, action) {
      const { name, email, age } = action.payload;
      state.user = {
        name,
        email,
        age,
        login:true
      };
    },
    setLogout(state){
      state.user={
        ...initialState.user
      }
    }
  },
});
// 每个 case reducer 函数会生成对应的 Action creators
export const { setLogin, setLogout } = userSlice.actions;

export default userSlice.reducer;
