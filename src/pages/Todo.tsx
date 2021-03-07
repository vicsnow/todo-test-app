import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Todo() {
    const { id }: any = useParams();
    return (
        <div>
            <Link to='/'>
                back
            </Link>
            todo id {id}
        </div>
    )
}
