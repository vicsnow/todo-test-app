import React from 'react'
import FormField from '../components/FormField'
import { ITodo } from '../entities'
import FormCheckbox from '../components/FormCheckbox';

export interface ITodoForm {
    onChange(id: string, newValue: string): any
    data?: ITodo
    onSubmit(): any
}
export default function TodoForm(props: ITodoForm) {
    const { data, onSubmit, onChange } = props;

    return (
        <div>

            <form>
                <FormField id='title' label="Title" onChange={onChange} value={data?.title} />
                <FormCheckbox id='completed' label="Completed" onChange={onChange} value={data?.completed} />
                <FormField id='userId' label="User ID" onChange={onChange} value={data?.userId} />
            </form>
            <button onClick={onSubmit}>Save</button>
        </div>
    )
}
