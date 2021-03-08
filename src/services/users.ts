import { IUser } from "../entities";
import { USERS_URL } from '../constants'
import axios from "axios";

let mock: IUser[] = [];
export async function getUser(userId: number) {
    const itemIndex = mock.findIndex(v => v.id === userId)
    console.log("getUser", itemIndex, mock)
    if (itemIndex >= 0) {
        return { ...mock[itemIndex] }
    }
    console.log("fetchUser", userId)
    const result = await axios.get(`${USERS_URL}/${userId}`);
    mock = [...mock, { ...result.data }]
    return result.data
}
