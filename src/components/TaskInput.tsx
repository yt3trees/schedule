import React, { useState } from 'react'
import { Task } from './Types'

type Props = {
    setTask: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]
}

const TaskInput: React.FC<Props> = ({ setTask, tasks }) => {
    const [ inputTimeFrom, setinputTimeFrom ] = useState<string>('')
    const [ inputTimeTo, setinputTimeTo ] = useState<string>('')
    const [ inputTodo, setinputTodo ] = useState<string>('')

    const [ count, setCount ] = useState<number>(tasks.length + 1)

    const handleInputFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinputTimeFrom(e.target.value)
    }
    const handleInputTo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinputTimeTo(e.target.value)
    }
    const handleInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setinputTodo(e.target.value)
    }

    const handleSubmit = () => {
        setCount(count + 1)

        const newTask: Task = {
            id: count,
            timefrom: inputTimeFrom,
            timeto: inputTimeTo,
            todo: inputTodo
        }

        setTask([ ...tasks ,newTask])
        setinputTimeFrom('')
        setinputTimeTo('')
        setinputTodo('')
    }
    const handle0900 = () => {
        setinputTimeFrom('09:00～')
    }
    const handle0930 = () => {
        setinputTimeFrom('09:30～')
    }
    const handle1000 = () => {
        setinputTimeFrom('10:00～')
    }
    const handle1030 = () => {
        setinputTimeFrom('10:30～')
    }
    const handle1100 = () => {
        setinputTimeFrom('11:00～')
    }
    const handle1130 = () => {
        setinputTimeFrom('11:30～')
    }
    const handle1200 = () => {
        setinputTimeFrom('12:00～')
    }
    const handle1230 = () => {
        setinputTimeFrom('12:30～')
    }
    const handle1300 = () => {
        setinputTimeFrom('13:00～')
    }
    const handle1330 = () => {
        setinputTimeFrom('13:30～')
    }
    const handle1400 = () => {
        setinputTimeFrom('14:00～')
    }
    const handle1430 = () => {
        setinputTimeFrom('14:30～')
    }
    const handle1500 = () => {
        setinputTimeFrom('15:00～')
    }
    const handle1530 = () => {
        setinputTimeFrom('15:30～')
    }
    const handle1600 = () => {
        setinputTimeFrom('16:00～')
    }
    const handle1630 = () => {
        setinputTimeFrom('16:30～')
    }
    const handle1700 = () => {
        setinputTimeFrom('17:00～')
    }
    const handle1730 = () => {
        setinputTimeFrom('17:30～')
    }
    const handle1800 = () => {
        setinputTimeFrom('18:00～')
    }
    const handle1830 = () => {
        setinputTimeFrom('18:30～')
    }
    const handle1900 = () => {
        setinputTimeFrom('19:00～')
    }
    const handle1930 = () => {
        setinputTimeFrom('19:30～')
    }
    const handle2000 = () => {
        setinputTimeFrom('20:00～')
    }
    const handle2030 = () => {
        setinputTimeFrom('20:30～')
    }
    const handle2100 = () => {
        setinputTimeFrom('21:00～')
    }
    const handle2130 = () => {
        setinputTimeFrom('21:30～')
    }
    const handle2200 = () => {
        setinputTimeFrom('22:00～')
    }
    const handle2230 = () => {
        setinputTimeFrom('22:30～')
    }
    const handle2300 = () => {
        setinputTimeFrom('23:00～')
    }
    const handle2330 = () => {
        setinputTimeFrom('23:30～')
    }
{/*-------------------------------------------------------------*/}
    const handle0930to = () => {
        setinputTimeTo('09:30　')
    }
    const handle1000to = () => {
        setinputTimeTo('10:00　')
    }
    const handle1030to = () => {
        setinputTimeTo('10:30　')
    }
    const handle1100to = () => {
        setinputTimeTo('11:00　')
    }
    const handle1130to = () => {
        setinputTimeTo('11:30　')
    }
    const handle1200to = () => {
        setinputTimeTo('12:00　')
    }
    const handle1230to = () => {
        setinputTimeTo('12:30　')
    }
    const handle1300to = () => {
        setinputTimeTo('13:00　')
    }
    const handle1330to = () => {
        setinputTimeTo('13:30　')
    }
    const handle1400to = () => {
        setinputTimeTo('14:00　')
    }
    const handle1430to = () => {
        setinputTimeTo('14:30　')
    }
    const handle1500to = () => {
        setinputTimeTo('15:00　')
    }
    const handle1530to = () => {
        setinputTimeTo('15:30　')
    }
    const handle1600to = () => {
        setinputTimeTo('16:00　')
    }
    const handle1630to = () => {
        setinputTimeTo('16:30　')
    }
    const handle1700to = () => {
        setinputTimeTo('17:00　')
    }
    const handle1730to = () => {
        setinputTimeTo('17:30　')
    }
    const handle1800to = () => {
        setinputTimeTo('18:00　')
    }
    const handle1830to = () => {
        setinputTimeTo('18:30　')
    }
    const handle1900to = () => {
        setinputTimeTo('19:00　')
    }
    const handle1930to = () => {
        setinputTimeTo('19:30　')
    }
    const handle2000to = () => {
        setinputTimeTo('20:00　')
    }
    const handle2030to = () => {
        setinputTimeTo('20:30　')
    }
    const handle2100to = () => {
        setinputTimeTo('21:00　')
    }
    const handle2130to = () => {
        setinputTimeTo('21:30　')
    }
    const handle2200to = () => {
        setinputTimeTo('22:00　')
    }
    const handle2230to = () => {
        setinputTimeTo('22:30　')
    }
    const handle2300to = () => {
        setinputTimeTo('23:00　')
    }
    const handle2330to = () => {
        setinputTimeTo('23:30　')
    }
    const handle2400to = () => {
        setinputTimeTo('24:00　')
    }
    return (
        <div>
            <div className='inputForm'>
                <div className="inner">
                    {/*<input
                        type="text"
                        className="input"
                        value={inputTimeFrom}
                        onChange={handleInputFrom}
                    />*/}
                    <div className="btn-headerF">FROM</div>
                    <div className="btn-headerT">TO</div><br></br>
                    <div id="left">
                    <button onClick={handle0900} className="btnis-primary">09:00</button>
                    <button onClick={handle0930} className="btnis-primary">09:30</button>
                    <button onClick={handle1000} className="btnis-primary">10:00</button>
                    <button onClick={handle1030} className="btnis-primary">10:30</button>
                    <button onClick={handle1100} className="btnis-primary">11:00</button>
                    <button onClick={handle1130} className="btnis-primary">11:30</button>
                    <button onClick={handle1200} className="btnis-primary">12:00</button>
                    <button onClick={handle1230} className="btnis-primary">12:30</button>
                    <button onClick={handle1300} className="btnis-primary">13:00</button>
                    <button onClick={handle1330} className="btnis-primary">13:30</button>
                    <button onClick={handle1400} className="btnis-primary">14:00</button>
                    <button onClick={handle1430} className="btnis-primary">14:30</button>
                    <button onClick={handle1500} className="btnis-primary">15:00</button>
                    <button onClick={handle1530} className="btnis-primary">15:30</button>
                    <button onClick={handle1600} className="btnis-primary">16:00</button>
                    <button onClick={handle1630} className="btnis-primary">16:30</button>
                    <button onClick={handle1700} className="btnis-primary">17:00</button>
                    <button onClick={handle1730} className="btnis-primary">17:30</button>
                    <button onClick={handle1800} className="btnis-primary">18:00</button>
                    <button onClick={handle1830} className="btnis-primary">18:30</button>
                    <button onClick={handle1900} className="btnis-primary">19:00</button>
                    <button onClick={handle1930} className="btnis-primary">19:30</button>
                    <button onClick={handle2000} className="btnis-primary">20:00</button>
                    <button onClick={handle2030} className="btnis-primary">20:30</button>
                    <button onClick={handle2100} className="btnis-primary">21:00</button>
                    <button onClick={handle2130} className="btnis-primary">21:30</button>
                    <button onClick={handle2200} className="btnis-primary">22:00</button>
                    <button onClick={handle2230} className="btnis-primary">22:30</button>
                    <button onClick={handle2300} className="btnis-primary">23:00</button>
                    <button onClick={handle2330} className="btnis-primary">23:30</button>
                    </div>
                    <div id="right">
                    <button onClick={handle0930to} className="btnis-primary">09:30</button>
                    <button onClick={handle1000to} className="btnis-primary">10:00</button>
                    <button onClick={handle1030to} className="btnis-primary">10:30</button>
                    <button onClick={handle1100to} className="btnis-primary">11:00</button>
                    <button onClick={handle1130to} className="btnis-primary">11:30</button>
                    <button onClick={handle1200to} className="btnis-primary">12:00</button>
                    <button onClick={handle1230to} className="btnis-primary">12:30</button>
                    <button onClick={handle1300to} className="btnis-primary">13:00</button>
                    <button onClick={handle1330to} className="btnis-primary">13:30</button>
                    <button onClick={handle1400to} className="btnis-primary">14:00</button>
                    <button onClick={handle1430to} className="btnis-primary">14:30</button>
                    <button onClick={handle1500to} className="btnis-primary">15:00</button>
                    <button onClick={handle1530to} className="btnis-primary">15:30</button>
                    <button onClick={handle1600to} className="btnis-primary">16:00</button>
                    <button onClick={handle1630to} className="btnis-primary">16:30</button>
                    <button onClick={handle1700to} className="btnis-primary">17:00</button>
                    <button onClick={handle1730to} className="btnis-primary">17:30</button>
                    <button onClick={handle1800to} className="btnis-primary">18:00</button>
                    <button onClick={handle1830to} className="btnis-primary">18:30</button>
                    <button onClick={handle1900to} className="btnis-primary">19:00</button>
                    <button onClick={handle1930to} className="btnis-primary">19:30</button>
                    <button onClick={handle2000to} className="btnis-primary">20:00</button>
                    <button onClick={handle2030to} className="btnis-primary">20:30</button>
                    <button onClick={handle2100to} className="btnis-primary">21:00</button>
                    <button onClick={handle2130to} className="btnis-primary">21:30</button>
                    <button onClick={handle2200to} className="btnis-primary">22:00</button>
                    <button onClick={handle2230to} className="btnis-primary">22:30</button>
                    <button onClick={handle2300to} className="btnis-primary">23:00</button>
                    <button onClick={handle2330to} className="btnis-primary">23:30</button>
                    <button onClick={handle2400to} className="btnis-primary">24:00</button>
                    </div>
                    <div id="input">
                    <label className="ef">
                    <input
                        type="text"
                        className="input"
                        value={inputTodo}
                        onChange={handleInputTodo}
                        placeholder="TASK"
                    />
                    </label>
                    </div>
                    <button onClick={handleSubmit} className="add-button">ADD</button>
                </div>
            </div>
        </div>
    )
}

export default TaskInput