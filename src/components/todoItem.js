import React from 'react'
import PropTypes from 'prop-types'

function TodoItem(props) {
    return (
        <li onClick={props.onClick} style={{textDecoration: props.isCompleted ? 'line-through' : 'none'}}>
            {props.text}
        </li>
    )
}

TodoItem.prototype = {
    onClick: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem