import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  username: '',
  first_name: '',
  last_name: '',
  birth_date: '',
  accessToken: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setUserName: (state, action) => {
      state.username = action.payload
    },
    setFirstName: (state, action) => {
      state.first_name = action.payload
    },
    setLastName: (state, action) => {
      state.last_name = action.payload
    },
    setBirthDate: (state, action) => {
      state.birth_date = action.payload
    },
    accessToken: (state, action) => {
      state.password = action.payload
    },

  },
})

export default userSlice;

