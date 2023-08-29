import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// import taskReducer from '../features/task/taskSlice'; // Thêm vào
import todoListSlice from '../components/TodoList/todoListSlice'; // Thêm vào
import filterSlice from '../components/Filters/filterSlice'; // Thêm vào

export const store = configureStore({
  reducer: {
    // task: taskReducer,
    todoList: todoListSlice,
    filters: filterSlice
  },
});
