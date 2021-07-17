import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import TodoList from './components/TodoList/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new'
        },
        {
            id: 2,
            title: 'Code',
            status: 'completed'
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'new'
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');

    const handleTodoClick = (todoItem, idx) => {
        console.log(todoItem, idx);
        // clone current array to a new one
        const newTodoList = [...todoList];

        // toggle state
        // const newTodo = {
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        // newTodoList[idx] = newTodo;

        // update todo list
        setTodoList(newTodoList);
    }

    const handleShowAll = () => {
        setFilterStatus('all');
    }
    const handleShowCompleted = () => {
        setFilterStatus('completed');
    }
    const handleShowNew = () => {
        setFilterStatus('new');
    }

    const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    // console.log(renderTodoList);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAll}>Show All</button>
                <button onClick={handleShowCompleted}>Show Completed</button>
                <button onClick={handleShowNew}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;