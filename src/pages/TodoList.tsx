import React, { useState, useEffect } from 'react';

import { ITodo, IFilterParams, TaskStates } from '../entities'
import CardWrapper from '../components/CardWrapper';
import { getTodoList, updateTodo, deleteTodo } from '../services/todos';
import { Link } from 'react-router-dom';
export default function TodoList() {
    const [list, setList] = useState<ITodo[]>([])
    const [filterParams, setFilterParams] = useState<IFilterParams>({})
    async function getData() {
        const result = await getTodoList()
        setList([...result])
    }
    async function filterData() {
        const result = await getTodoList(filterParams)
        setList([...result])
    }
    const handleUpdateTodo = async (id: number, newData: Partial<ITodo>) => {
        await updateTodo(id, newData)
        getData()
    }
    const handleDeleteTodo = async (id: number) => {
        await deleteTodo(id)
        getData()
    }
    const onCheckbox = (id: number, newValue: boolean, todo: ITodo) => handleUpdateTodo(id, { ...todo, completed: newValue })

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="layout">
            <div className="list-header">
                <Link to={`/todo/`}>
                    <h3>Add TODO</h3>
                </Link>
                <input placeholder="user id filter" value={filterParams.userId} onChange={(e) => setFilterParams({ ...filterParams, userId: parseInt(e.target.value) || 0 })} />
                <select defaultValue={TaskStates.noState} value={filterParams.taskState} onChange={(e) => setFilterParams({ ...filterParams, taskState: parseInt(e.target.value) })} >
                    <option value={TaskStates.noState}>все</option>
                    <option value={TaskStates.completed}>да</option>
                    <option value={TaskStates.incompleted}>нет</option>
                </select>
                <button onClick={() => filterData()}>filter</button>
            </div>
            <div className="card-list">
                {list.length > 0 ? list.map((todo, i) => <CardWrapper key={`${todo?.id}_${i}`}
                    id={todo.id}
                    userId={todo.userId}
                    title={todo.title}
                    completed={todo.completed}
                    onCheckbox={(id, newValue) => onCheckbox(id, newValue, todo)}
                    onDelete={handleDeleteTodo}
                />) : "Loading..."}
            </div>
        </div>
    );
}
