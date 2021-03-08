import React, { useEffect, useState, useCallback } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { ITodo } from '../entities';
import TodoForm from './TodoForm';
import { updateTodo, createTodo, getTodoItem } from '../services/todos';

export default function Todo(props: any) {
    const { id }: any = useParams();
    const [todo, setTodo] = useState<Partial<ITodo>>({})
    const history = useHistory();
    const getData = useCallback(async () => {
        const result = await getTodoItem(parseInt(id))
        setTodo({ ...result })
    }, [id])
    const onChange = (key: keyof ITodo, newData: any) => {
        setTodo({ ...todo, [key]: newData })
    }
    async function onSubmit() {
        if (id) await updateTodo(parseInt(id), todo)
        else await createTodo(todo)
        history.push('/')
    }
    useEffect(() => {
        getData()
    }, [getData])
    return (
        <div>
            <Link to='/'>
                back
            </Link>
            <TodoForm data={todo} onSubmit={onSubmit} onChange={onChange} />
        </div>
    )
}
