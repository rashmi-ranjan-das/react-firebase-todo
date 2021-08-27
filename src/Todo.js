import React from 'react'
import './Todo.css'
import {List, ListItem, ListItemText, ListItemAvatar} from '@material-ui/core'

function Todo(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
            <ListItemText primary={props.text} secondary="Dummy Text" />
            </ListItem>
        </List>
    )
}

export default Todo

//a component is written once but can be user several times at several places
//props are properties; when reusing a component it allows us to differentiate one cop from another