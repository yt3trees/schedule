import React from 'react'
import TaskItem from './TaskItem'
import { Task } from './Types'

type Props = {
    tasks: Task[]
    setTask: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<Props> = ({ tasks, setTask }) => {

    const handleAdd = (task: Task) => {

    }

    const handleDelete = (task: Task) => {
        setTask(prev => prev.filter(t =>
            t.id !== task.id
            ))
    }

    return (
        <div className="inner">
        {
            tasks.length <= 0 ? '登録されたTODOはありません。':
            <ul className="task-list">
            { tasks.map( task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleAdd={handleAdd}
                    handleDelete={handleDelete}
                />
            ))}
            </ul>
        }
        </div>
    )
}

export default TaskList