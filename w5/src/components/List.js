import React from 'react'

export default function List({name, age}) {
    return (
        <ul>
            <li>{name}{age}</li>
        </ul>
    )       
}