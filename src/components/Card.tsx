import React from 'react'
import { ICard } from '../entities'
import { Link } from 'react-router-dom'

/** Todo list card */
export default function Card(props: ICard) {
    const { title, id, username, completed, onCheckbox } = props;
    const onCheckboxClick = (e: any) => onCheckbox(id, !completed)

    return (
        <div>
            <hr />
            <Link to={`/todo/${id}`}>
                <h3>{title}</h3>
            </Link>
            <input type="checkbox" checked={completed} onChange={onCheckboxClick} />
            <h6>{username}</h6>
        </div>
    )
}
