import React from 'react'
import { ICard } from '../entities';
import Card from './Card';
// import { getUser } from '../services/users';

export default function CardWrapper(props: ICard) {
    const { userId } = props
    // const [user, setUser] = useState<IUser | undefined>(undefined);
    // useEffect(() => {
    //     async function fetchUser() {
    //         if (userId) getUser(userId).then(result =>
    //             setUser({ ...result })
    //         )
    //     }

    //     fetchUser();
    // }, [userId])
    return <Card {...props} username={userId?.toString()} />
}
