import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  username: '',
  first_name: '',
  last_name: '',
  birth_date: '',
  password: '',
  accessToken: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
    password: (state, action) => {
      state.password = action.payload
    },
    accessToken: (state, action) => {
      state.password = action.payload
    },

  },
})

export default userSlice;

