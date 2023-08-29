import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, addTodos, fetchNewTodos } from "./todoListSlice";
import {todosRemainingSelector, selectTodoList} from "../redux/selectors"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  const dispatch = useDispatch();
  const dataTodoList = useSelector(todosRemainingSelector);
  // console.log("dataTodoListArr", dataTodoList);

  const [inputTodo, setInputTodo] = useState("");
  const [priorityTodo, setpriorityTodo] = useState("Medium");

  const handleInputTodo = (e) => {
    setInputTodo(e.target.value);
    // dispatch(
    //   addTodo({
    //     id: uuidv4(),
    //     name: inputTodo,
    //     completed: false,
    //     priority: priorityTodo,
    //   })
    // );
    // console.log(inputTodo);
  };

  const handleAdd = () => {
    // console.log(inputTodo);
    // dispatch(
    //   addTodo({
    //     id: uuidv4(),
    //     name: inputTodo,
    //     completed: false,
    //     priority: priorityTodo,
    //   })
    // );

    // dispatch(
    //   addTodos({
    //     id: uuidv4(),
    //     name: inputTodo,
    //     completed: false,
    //     priority: priorityTodo,
    //   })
    // );

    dispatch(
      fetchNewTodos({
        id: uuidv4(),
        name: inputTodo,
        completed: false,
        priority: priorityTodo,
      })
    );
  };

  const handlePriority = (value) => {
    setpriorityTodo(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name="Learn React" priority="High" />
        <Todo name="Learn Redux" priority="Medium" />
        <Todo name="Learn JavaScript" priority="Low" /> */}
        {dataTodoList.map(todo => <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed}/>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={inputTodo} onChange={handleInputTodo} />
          <Select defaultValue={priorityTodo} onChange={handlePriority}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
