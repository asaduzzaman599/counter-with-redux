import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "countingValue",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
            //value because we set it initially 
        },
        decrement: (state) => {

            if (state.value !== 0) {
                state.value -= 1
            }
        },
        incrementWithNumber: (state, action) => {
            state.value += action.payload
        },
        decrementWithNumber: (state, action) => {
            const value = state.value - action.payload
            if (value >= 0) {
                state.value = value
            }
        }
    }
})

export const { increment, decrement, incrementWithNumber, decrementWithNumber } = counterSlice.actions
export default counterSlice.reducer