import React, { useState, useEffect } from 'react'
import { IUser, ICard } from '../entities';
import axios from 'axios';
import Card from './Card';

export default function CardWrapper(props: ICard) {
    const { userId } = props
    const [user, setUser] = useState<IUser | undefined>(undefined);
    useEffect(() => {
        async function getUser() {
            if (userId) axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(result =>
                setUser(result.data)
            )
        }

        getUser();
    }, [userId])
    return <Card {...props} username={user?.username} />
}
