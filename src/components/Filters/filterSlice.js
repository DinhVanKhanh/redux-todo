// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     search: '123',
//     status: 'All',
//     priority: '',
// };

// export const filterSlice = createSlice({
//     name: "filter",
//     initialState,
//     reducers: {
//         filterSearch: (state, action) => {
//             state.search = action.payload;
//             // console.log(action.payload);
//             // state.todoList
//         },
//     },
// });

// export const { filterSearch } = filterSlice.actions;
// export const selectfilterList = (state) => state.search;
// // export const selectTask = (state) => state.task;
// export default filterSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: "",
    status: "",
    priority: []
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterSearch: (state, action) => {
            state.search = action.payload;
        },

        filterStatus: (state, action) => {
            state.status = action.payload;
        },

        filterPriority: (state, action) => {
            state.priority = action.payload;
        },
    },
});

export const { filterSearch } = filterSlice.actions;
export const { filterStatus } = filterSlice.actions;
export const { filterPriority } = filterSlice.actions;
// export const selectFilterList = (state) => state.todoList.todoList;


// export const selectFilterList = (state) => {
//     return state.todoList.todoList.filter((todo) => todo.name.includes(state.filters.search));
// } 

// export const selectTask = (state) => state.task;
export default filterSlice.reducer;
