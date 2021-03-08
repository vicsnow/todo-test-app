import React from 'react'

export interface IFormField {
    label?: string;
    id: string
    onChange(id: string, newValue: any): any
    value?: string | number | boolean
}
export default function FormField(props: IFormField) {
    return (
        <div>
            <label htmlFor={props.id} >{props.label}</label>
            <input
                type="text"
                id={props.id}
                name={props.id}
                onChange={(e) => props.onChange(props.id, e.target.value)}
                value={props.value?.toString() || ""}
            />


        </div>
    );
}