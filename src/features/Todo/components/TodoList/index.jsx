import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todoItem, idx) => {
        if (!onTodoClick) return;

        onTodoClick(todoItem, idx);
    }
    return (
        <ul className="todo-list">
            {todoList.map((todoItem, idx) => (
                <li
                    key={todoItem.id}
                    className={classNames({
                        'todo-item': true,
                        completed: todoItem.status === 'completed'
                    })}
                    onClick={() => handleTodoClick(todoItem, idx)}>
                    {todoItem.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;