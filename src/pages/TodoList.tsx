import React, { useState, useEffect } from 'react';

import axios from 'axios'
import { ITodo } from '../entities'
import CardWrapper from '../components/CardWrapper';
const TODO_URL = 'https://mockend.com/vicsnow/todo-test-app/posts';

export default function TodoList() {
    const [list, setlist] = useState<ITodo[]>([])
    async function getData() {
        const result = await axios.get(TODO_URL)
        setlist(result.data)
    }
    const updateTodo = (id: number, newData: Partial<ITodo>) => axios.patch(`${TODO_URL}/${id}`,
        newData).then(() => {
            // const { data } = response
            // let newList = list;
            // newList[data.id] = { ...data };
            // setlist([data])
            getData()
        })
    const onCheckbox = (id: number, newValue: boolean) => updateTodo(id, { completed: newValue })

    useEffect(() => {
        getData()

    }, [])
    return (
        <div>
            list
            {list.length > 0 ? list.map(todo => <CardWrapper key={todo.id}
                id={todo.id}
                userId={todo.userId}
                title={todo.title}
                completed={todo.completed}
                onCheckbox={onCheckbox}
            />) : "Loading..."}
        </div>
    );
}
