import React from 'react'
import PropTypes from 'prop-types'
const StateContext = React.createContext()
function TodoItem(props) {
    return (
        <li onClick={props.deleteOnClick} style={{textDecoration: props.isCompleted ? 'line-through' : 'none'}}>
            {props.title}   ---  {props.startDate}
            {/* <ThemeContext.Consumer>
                {context => (
                    { context }
                )}
            </ThemeContext.Consumer> */}
        </li>
    )
}

TodoItem.prototype = {
    onClick: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem