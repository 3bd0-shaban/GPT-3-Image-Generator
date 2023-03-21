import { createSlice } from "@reduxjs/toolkit"
const DataSlice = createSlice({
    name: "Data",
    initialState: {
        msg: '',
        ImageVariations:[]

    },
    reducers: {
        setMSG(state, action) {
            state.msg = action.payload;
        },
        setImageVariations(state, action) {
            state.ImageVariations = action.payload;
        },
    },

})

export const DataAction = DataSlice.actions;
export default DataSlice.reducer