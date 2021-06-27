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
                <span className="labelFrom">{task.timefrom}</span>
                ～
                <span className="labelTo">{task.timeto}</span>
                ：
                <span className="labelTodo">{task.todo}</span>
                {/*<button
                    onClick={() => handleDelete(task)}
                    className="btn is-delete"
                >削除</button>*/}
            </label>
        </li>
    )
}

export default TaskItem