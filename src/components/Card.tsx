import React from 'react'
import { Link } from 'react-router-dom'
import { ITodo } from '../entities';

export interface ICard extends ITodo {
    username?: string
    onCheckbox(id: number, newValue: boolean): any
    onDelete(id: number): any
}
/** Todo list card */
export default function Card(props: ICard) {
    const { title, id, username, completed, onCheckbox, onDelete } = props;
    const onCheckboxClick = (e: any) => onCheckbox(id || 0, !completed)

    return (
        <div className="card-wrapper">
            <Link to={`/todo/${id}`}>
                <h3>{title}</h3>
            </Link>
            <input type="checkbox" checked={completed} onChange={onCheckboxClick} />
            <h6>User: {username}</h6>
            <button onClick={() => id && onDelete(id)} >&times;</button>
        </div>
    )
}
