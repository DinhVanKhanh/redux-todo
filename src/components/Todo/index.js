import { Row, Tag, Checkbox, Button } from 'antd';
import {CloseSquareOutlined} from '@ant-design/icons';

import { useState } from 'react';
import { selectTodoList, todosRemainingSelector } from '../redux/selectors';
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, fetctClosedTodos, fetctCompletedTodos } from '../TodoList/todoListSlice';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, priority, id, completed }) {
  const [checked, setChecked] = useState(completed);

  const dispatch = useDispatch();
  // const dataTodoList = useSelector(todosRemainingSelector);
  // console.log("dataTodoListTodo", dataTodoList);
  const toggleCheckbox = () => {
    setChecked(!checked);
    // dispatch(completeTodo(id));
    dispatch(fetctCompletedTodos(id));
  };

  const closeTodo = (id) => {
    dispatch(fetctClosedTodos(id));
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ marginTrim: 0 }}>
        {priority}
      </Tag>
      <Button onClick={closeTodo}>X</Button>


    </Row>
  );
}
