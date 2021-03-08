import { TODO_URL } from '../constants';
import { ITodo, Todo, IFilterParams, TaskStates } from '../entities';
import axios from 'axios';

let mock: ITodo[] = []
export async function getTodoList(filterParams?: IFilterParams) {
    const getData = async () => {
        console.log("getData")
        if (mock.length > 0) return (mock)
        console.log("fetchData")
        const result = await axios.get(TODO_URL);
        mock = [...result.data]
        return mock
    }
    let data = await getData()
    if (filterParams && Object.keys(filterParams).length > 0) {
        if (filterParams?.userId) {
            data = data.filter(v => v.userId === filterParams.userId)
            console.log("filtered by id", filterParams.userId, data)
        }
        if (filterParams?.taskState) {
            data = data.filter(v => {
                switch (filterParams.taskState) {
                    case TaskStates.completed:
                        return v.completed === true
                    case TaskStates.incompleted:
                        return v.completed === false
                    default: return true
                }
            })
            console.log("filtered by state", filterParams.taskState, data)
        }
    }
    return [...data]
}

export async function getTodoItem(itemId: number) {
    console.log("getItem")
    if (mock.length > 0) {
        const itemIndex = mock.findIndex(v => v.id === itemId)
        console.log(mock[itemIndex], itemId)
        return { ...mock[itemIndex] }
    }
    console.log("fetchItem")
    const result = await axios.get(`${TODO_URL}/${itemId}`);
    return result.data
}

export async function updateTodo(itemId: number, newData: Partial<ITodo>) {
    const send = newData
    console.log(send)
    const response = await axios.patch(`${TODO_URL}/${itemId}`, send)
    const itemIndex = mock.findIndex(v => v.id === itemId)
    mock[itemIndex] = { ...response.data }
    console.log("patch response", response.data)
    return response.data
}

export async function createTodo(newData: Partial<ITodo>) {
    const response = await axios.post(`${TODO_URL}`, new Todo(newData))
    mock.push({ ...response.data })
    return response.data
}