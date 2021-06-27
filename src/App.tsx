import React, { useState } from 'react'
import TaskList  from './components/TaskList'
import TaskInput from './components/TaskInput'
import { Task } from './components/Types'
import './App.css';

const initialState: Task[] = [
  {
    id: 1,
    timefrom: "09:00",
    timeto: "10:00",
    todo: "テスト"
  }
]

const App: React.FC = () => {
  const [tasks, setTask] = useState(initialState)

  return (
    <div>
      <TaskInput setTask={setTask} tasks={tasks} />
      <TaskList setTask={setTask} tasks={tasks} />
    </div>

  );
}

export default App;
