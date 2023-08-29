import { Typography, Divider } from "antd";
import "./App.css";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { setupServer } from "./fakeApi";
import { useEffect } from "react";
import { fetchListTodo } from "./components/TodoList/todoListSlice";
import { useDispatch } from "react-redux";

if(process.env.NODE_ENV !== 'production') {
  setupServer();
}

const { Title } = Typography;

function App() {
  // useEffect(() => {
  //   fetch("/api/todos", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       id: 4,
  //       name: "Learn Jquery",
  //       completed: true,
  //       priority: "High",
  //     }),
  //   }).then((res) => {
  //     fetch("/api/todos")
  //       .then((res) => res.json())
  //       .then((res) => console.log(res));

  //     fetch("/api/updateTodos", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         id: 4,
  //         name: "Learn ABC",
  //         completed: false,
  //         priority: "High",
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((res) => console.log(res));
  //   });
  // }, []);
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(fetchListTodo());
  }, []);


  return (
    <div
      style={{
        width: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 20,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
        height: "90vh",
      }}
    >
      <Title style={{ textAlign: "center" }}>TODO FILE </Title>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
