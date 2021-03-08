import React from 'react'

export interface IFormField {
    label?: string;
    id: string
    onChange(id: string, newValue: any): any
    value?: string | number | boolean
}
export default function FormCheckbox(props: IFormField) {
    return (
        <div>
            <label htmlFor={props.id} >{props.label}</label>
            <input
                type="checkbox"
                id={props.id}
                name={props.id}
                checked={!!props.value}
                onChange={() => props.onChange(props.id, !props.value)}
                value={props.value?.toString()}
            />


        </div>
    )
}
