import { ITodo } from "./ITodo";

export interface ICard extends ITodo {
    username?: string
    onCheckbox(id: number, newValue: boolean): any
}