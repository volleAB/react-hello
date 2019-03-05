import React from 'react'
import PropTypes from 'prop-types'

function TodoItem(props) {
    return (
        <li onClick={props.deleteOnClick} style={{textDecoration: props.isCompleted ? 'line-through' : 'none'}}>
            {props.title}   ---  {props.startDate}
        </li>
    )
}

TodoItem.prototype = {
    onClick: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem