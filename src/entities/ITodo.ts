export interface ITodo {
    userId?: number,
    id?: number,
    title?: string,
    completed?: boolean
}
export class Todo implements ITodo {
    title?: string
    completed?: boolean
    userId?: number;
    id?: number;
    constructor(dto: any) {
        this.userId = parseInt(dto.userId)
        this.id = parseInt(dto.id)
        this.completed = !!dto.completed;
        this.title = dto.title
    }
}