import React from 'react'
import { FaPlus } from 'react-icons/fa'

import './Form.css';

export default function Form({ novaTarefa, handleSumit, handleInput }) {
    return (
        <form onSubmit={handleSumit} action="#" className='form'>
            <input
                onChange={handleInput}
                value={novaTarefa}
                type="text"
            />
            <button type="submit">
                <FaPlus />
            </button>
        </form>
    )
}

