import React, { useState, useEffect } from 'react';

import { ITodo, IFilterParams, TaskStates } from '../entities'
import CardWrapper from '../components/CardWrapper';
import { getTodoList, updateTodo } from '../services/todos';
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
    const onCheckbox = (id: number, newValue: boolean) => handleUpdateTodo(id, { completed: newValue })

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Link to={`/todo/`}>
                <h3>+</h3>
            </Link>
            <input placeholder="user id filter" value={filterParams.userId} onChange={(e) => setFilterParams({ ...filterParams, userId: parseInt(e.target.value) || 0 })} />
            <select defaultValue={TaskStates.noState} value={filterParams.taskState} onChange={(e) => setFilterParams({ ...filterParams, taskState: parseInt(e.target.value) })} >
                <option value={TaskStates.noState}>все</option>
                <option value={TaskStates.completed}>да</option>
                <option value={TaskStates.incompleted}>нет</option>
            </select>
            <button onClick={() => filterData()}>filter</button>
            {list.length > 0 ? list.map((todo, i) => <CardWrapper key={`${todo?.id}_${i}`}
                id={todo.id}
                userId={todo.userId}
                title={todo.title}
                completed={todo.completed}
                onCheckbox={onCheckbox}
            />) : "Loading..."}
        </div>
    );
}
