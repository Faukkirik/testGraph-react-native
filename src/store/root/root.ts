import {createSlice} from "@reduxjs/toolkit";
type TouchDataType = 'day' | 'week' | 'month' | 'year'
const arrData = {
    touchData: 'week' as TouchDataType
    ,
    arrData: {
        day: [
            {x: '0', y: 975},
            {x: '06', y: 990},
            {x: '12', y: 1005},
            {x: '18', y: 1020},
            {x: '00', y: 1035}
        ],
        week: [
            {x: 'пн', y: 975},
            {x: 'вт', y: 990},
            {x: 'ср', y: 1005},
            {x: 'чт', y: 1020},
            {x: 'пт', y: 1035},
            {x: 'сб', y: 1035},
            {x: 'вс', y: 1035},
        ],
        month: [
            {x: 'фев', y: 975},
            {x: 'янв', y: 990},
            {x: 'апр', y: 1005},
            {x: 'мар', y: 1020},
            {x: 'май', y: 1035},
            {x: 'июн', y: 1035},
            {x: 'июл', y: 1005},
            {x: 'авг', y: 1020},
            {x: 'сен', y: 995},
            {x: 'окт', y: 1000},
            {x: 'ноя', y: 1010},
            {x: 'дек', y: 1005},
        ],
        year: [
            {x: '2019', y: 1020},
            {x: '2020', y: 1030},
            {x: '2021', y: 1015},
            {x: '2022', y: 1035},
            {x: '2023', y: 990},
        ]
    }
}
const rootSlice = createSlice({
    name: 'root',
    initialState: arrData,
    reducers: {
        selectedData: (state, action: {payload: TouchDataType}) => {
            state.touchData = action.payload
        }
    },
    extraReducers: builder => {
    }
})
export const {selectedData} = rootSlice.actions
export const root = rootSlice.reducer