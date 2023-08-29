import { createSelector } from "@reduxjs/toolkit";

export const selectTodoList = (state) => state.todoList.todoList; //sỡ dĩ có 2 .todoList là do lưu trữ todoList trong app/store.js
export const selectFilterList = (state) => state.filters;
// export const selectFilterStatus = (state) => state.filters.status;

export const todosRemainingSelector = createSelector(
  selectTodoList,
  selectFilterList,
  (todoList, filterList) => {
    // return todoList.todoList
    // console.log("[todoList]", todoList);
    return todoList.filter((todo) => {
      let status = "";
      let priority = "";

      status =
        filterList.status == "Completed"
          ? true
          : filterList.status == "Todo"
          ? false
          : "All";
        priority = filterList.priority;

    //   console.log("status: ", status);
    //   console.log("filterList.priority: ", filterList.priority);
    //   console.log("todo.priority: ", todo.priority);
      if (status != "All" && priority.length != 0) {
        console.log("filterList.priority", filterList.priority.includes(todo.priority));
        return (
          todo.name.includes(filterList.search) &&
          todo.completed == status && 
          filterList.priority.includes(todo.priority)
          
        );
      }else if (status != "All") {
        return (
            todo.name.includes(filterList.search) &&
            todo.completed == status            
          );
      }else if (priority.length != 0){
        return (
            todo.name.includes(filterList.search) &&
            filterList.priority.includes(todo.priority)
        );
      }

      return todo.name.includes(filterList.search);
    });
  }
);
