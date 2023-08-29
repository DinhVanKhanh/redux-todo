import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    init: "idle",
    todoList: [
        // {
        //     id: 1,
        //     name: "Learn React",
        //     completed: false,
        //     priority: "Low",
        // },
        // {
        //     id: 2,
        //     name: "Learn Vue",
        //     completed: false,
        //     priority: "Medium",
        // },
        // {
        //     id: 3,
        //     name: "Learn Jquery",
        //     completed: true,
        //     priority: "High",
        // },
    ],
};

export const todoListSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(state.todoList);
            state.todoList.push(action.payload);
        },
        completeTodo: (state, action) => {
            // let tmp = '';
            // console.log(action);
            state.todoList.map((todo) => {
                if (todo.id == action.payload) {
                    return (todo.completed = !todo.completed);
                }
            });
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchListTodo.pending, (state, action) => {
                // Add user to the state array
                // state.entities.push(action.payload);
                state.init = "loading";
                // console.log(state.todoList.init);
            })
            .addCase(fetchListTodo.fulfilled, (state, action) => {
                // Add user to the state array
                // state.entities.push(action.payload);
                state.init = "idle";
                console.log(state.init);
            })
            .addCase(fetchNewTodos.fulfilled, (state, action) => {
                // Add user to the state array
                // state.entities.push(action.payload);
                state.todoList = [...state.todoList, action.payload.todos]; // EQUAL TO state.todoList.push(action.payload.todos)
                // console.log("[action]", state.todoList);
            })
            .addCase(fetctCompletedTodos.fulfilled, (state, action) => {
                // Add user to the state array
                // console.log("fetctCompletedTodos", action.payload);
                state.todoList.map((todo) => {
                    if (todo.id == action.payload.todos.id) {
                        todo.completed = !todo.completed;
                    }
                });

                // console.log("[fetctCompletedTodos]", action.payload);
            })
            .addCase(fetctClosedTodos.fulfilled, (state, action) => {
                console.log(action.payload);
                state.todoList.map((todo) => {
                    if(todo.id === action.payload.id){
                        state.todoList.slice(todo.id);
                    }
                });
                // Add user to the state array
                // console.log("fetctCompletedTodos", action.payload);
                // state.todoList.map((todo) => {
                //     if (todo.id == action.payload.todos.id) {
                //         todo.completed = !todo.completed;
                //     }
                // });

                // console.log("[fetctCompletedTodos]", action.payload);
            })
            ;
    },
});

export const { addTodo } = todoListSlice.actions;
export const { completeTodo } = todoListSlice.actions;
// export const selectTodoList = (state) => state.todoList;
// export const selectTask = (state) => state.task;
export default todoListSlice.reducer;

// export const addTodos = (todo) => {
//     return function addTodoThunk(dispatch, getState) {
//         // console.log('todo', todo);
//         // console.log('dispatch', dispatch());
//         // console.log('getState', getState());

//         //custom
//         todo.name = `${todo.name} yes no`;
//         // console.log('todo', todo);
//         dispatch(addTodo(todo));
//     };
// };

// First, create the thunk
export const fetchListTodo = createAsyncThunk("todos/fetchTodos", async () => {
    // console.log('123123');
    //   const response = await userAPI.fetchById(userId)
    const res = await fetch("/api/todos");
    return res.json();
});

export const fetchNewTodos = createAsyncThunk(
    "todos/fetchNewTodos",
    async (todos) => {
        // console.log('123123');
        //   const response = await userAPI.fetchById(userId)
        const res = await fetch("/api/todos", {
            method: "POST",
            body: JSON.stringify(todos),
        });
        // console.log("[fetchNewTodos]", res.json());
        return res.json();
    }
);

export const fetctCompletedTodos = createAsyncThunk(
    "todos/fetchCompletedTodos",
    async (id) => {
        // console.log('[id]', id);
        //   const response = await userAPI.fetchById(userId)
        const res = await fetch("/api/updateTodos", {
            method: "POST",
            // body: id,
            body: JSON.stringify(id),
        });
        // console.log("[fetchNewTodos]", res.json());
        return res.json();
    }
);

export const fetctClosedTodos = createAsyncThunk(
    "todos/fetchClosedTodos",
    async (id) => {
        // console.log('[id]', id);
        //   const response = await userAPI.fetchById(userId)
        const res = await fetch(`/api/deleteTodos`, {
            method: "DELETE",
            // body: id,
            body: JSON.stringify(id),
        });
        console.log("[fetchNewTodos]", res.json());
        return res.json();
    }
);
