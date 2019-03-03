import React from 'react'
import PropTypes from 'prop-types'

function TodoItem(onClick, isCompleted, text) {
    return (
        <div>
            <ul>
                <li onClick={onClick} style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
                    {text}
                </li>
            </ul>
        </div>
    )
}

TodoItem.prototype = {
    onClick: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem