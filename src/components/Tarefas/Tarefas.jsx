import React from 'react'
import { FaEdit, FaWindowClose } from 'react-icons/fa'

import './tarefas.css'

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
    return (
        <ul className='tarefas'>
            {tarefas.map((tarefa, index) => (
                <li key={index}>
                    {tarefa}
                    <span>
                        <FaEdit onClick={(e) => handleEdit(e, index)} className='edit' />
                        <FaWindowClose onClick={(e) => handleDelete(e, index)} className='delete' />
                    </span>
                </li>
            ))}
        </ul>
    )
}
