import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  userBalance: 238.456
}

const loansSlice = createSlice({
  name: 'loans',
  initialState: defaultState,
  reducers: {
    increment: (state, action) => {
      state.userBalance = (parseFloat(state.userBalance) - parseFloat(action.payload)).toFixed(3)
    }
  }
})

export const { increment } = loansSlice.actions
export default loansSlice.reducer