import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterSearch, filterStatus, filterPriority } from "./filterSlice";
import { selectFilterList } from "../redux/selectors";

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  // const dataFilter = useSelector(selectFilterList);
  // console.log(dataFilter);

  const [inputFilter, setInputFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState([]);
  const handleSearch = (e) => {
    setInputFilter(e.target.value);
    // dispatch(filterSearch(e.target.value));
    dispatch(filterSearch(e.target.value));
    // console.log(inputFilter);
  }

  const handleClick = (e) => {
    console.log(e);
  };

  const handleStatus = (e) => {
    setStatusFilter(e.target.value);
    dispatch(filterStatus(e.target.value));
  };

  const handlePriority = (priorityList) => {
    setPriorityFilter(priorityList);
    dispatch(filterPriority(priorityList));
    // console.log(priorityList);
  };


  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search value={inputFilter} placeholder='input search text' onChange={handleSearch}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusFilter} onChange={handleStatus}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priorityFilter} onChange={handlePriority}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
