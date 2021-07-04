import React from 'react'
import { Task } from './Types'

type Props = {
    task: Task
    handleAdd: (task: Task) => void
    handleDelete: (task: Task) => void
}

const TaskItem: React.FC<Props> = ({ task, handleAdd, handleDelete}) => {

    return (
        <li className={'list'}>
            <label>
                <button
                        onClick={() => handleDelete(task)}
                        className="btn-delete"
                    >×</button>
                <span className="labelFrom">{task.timefrom}</span>
                <span className="labelTo">{task.timeto}</span>
                <span className="labelTodo">{task.todo}</span>
            </label>
        </li>
    )
}

export default TaskItem