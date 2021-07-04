import React, { useState } from 'react'
import TaskList  from './components/TaskList'
import TaskInput from './components/TaskInput'
import { Task } from './components/Types'
import './App.css';
import { title } from 'process';
import { render } from '@testing-library/react';
import { Helmet } from 'react-helmet';//yarn add react-helmet @types/react-helmet

const Title: React.FC = () => {
  return (
    <h1>1日の予定メーカー</h1>
  );
}
const Header: React.FC = () => {
  return (
    <Helmet>
    <title>1日の予定メーカー
    </title>
    </Helmet>
  )
}
const Footer: React.FC = () =>{
  return (
    <footer><a href="https://twitter.com/yt3trees">©2021 yt3trees</a></footer>
  )
}
/*const initialState: Task[] = [
  {
    id: 0,
    timefrom: "",
    timeto: "",
    todo: ""
  }
]*/
interface initial{
  id:number,
  timefrom: string,
  timeto: string,
  todo: string
}

const App: React.FC = () => {
  const [tasks, setTask] = useState<initial[]>([]);

  return (
    <div id="todo">
      <Header />
      <Title />
      <TaskInput setTask={setTask} tasks={tasks} />
      <TaskList setTask={setTask} tasks={tasks} />
      <Footer />
    </div>
  );
}

export default App;
