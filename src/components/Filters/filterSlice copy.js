import { createSlice } from "@reduxjs/toolkit";
// import todoListSlice from "../TodoList/todoListSlice";

const initialState = {
    todoList: [
        {
            id: 1,
            name: "title",
            completed: false,
            priority: "Low",
        },
    ],
};

export const filterSlice = createSlice({
    name: "filterList",
    initialState,
    reducers: {
        filterSearch: (state, action) => {
            // console.log(action.payload);
            state.todoList["name"] = action.payload;
        },
    },
});

export const { filterSearch } = filterSlice.actions;
// export const selectfilterList = (state) => state.search;
export const selectfilterList = (state) =>  state.todoList["name"];
// export const selectTask = (state) => state.task;
export default filterSlice.reducer;
