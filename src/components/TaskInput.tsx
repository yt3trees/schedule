import React, { useEffect, useState } from 'react'
import { Task } from './Types'

type Props = {
    setTask: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]
}

const TaskInput: React.FC<Props> = ({ setTask, tasks }) => {
    const [ inputTimeFrom, setinputTimeFrom ] = useState<string>('')
    const [ inputTimeTo, setinputTimeTo ] = useState<string>('')
    const [ inputTodo, setinputTodo ] = useState<string>('')
    const [ inputList, setinputList ] = useState<string>('')

    const [ count, setCount ] = useState<number>(tasks.length)

    const [ status, setStatus ] = useState<string>('')
    const [ status2, setStatus2 ] = useState<string>('')

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
        //inputTimeFromがnullなら実行しない
        if (inputTimeFrom === '') {
            alert('Fromを入力してください')
            return
        }
        if (inputTimeTo === '') {
            alert('Toを入力してください')
            return
        }
        if (inputTodo === '') {
            alert('Taskを入力してください')
            return
        }

        setCount(count + 1)
        setStatus('')
        setStatus2('')

        const newTask: Task = {
            id: count,
            timefrom: inputTimeFrom,
            timeto: inputTimeTo,
            todo: inputTodo
        }

        setTask([ ...tasks ,newTask])
        const text = inputList + `${newTask.timefrom}${newTask.timeto}${newTask.todo}\n`
        setinputList( text )
        console.log(text)
        navigator.clipboard.writeText(text)

        setinputTimeFrom('')
        setinputTimeTo('')
        setinputTodo('')
    }
    const handle0900 = () => {
        setinputTimeFrom('09:00～')
        setStatus('x0900')
    }
    const handle0930 = () => {
        setinputTimeFrom('09:30～')
        setStatus('x0930')
    }
    const handle1000 = () => {
        setinputTimeFrom('10:00～')
        setStatus('x1000')
    }
    const handle1030 = () => {
        setinputTimeFrom('10:30～')
        setStatus('x1030')
    }
    const handle1100 = () => {
        setinputTimeFrom('11:00～')
        setStatus('x1100')
    }
    const handle1130 = () => {
        setinputTimeFrom('11:30～')
        setStatus('x1130')
    }
    const handle1200 = () => {
        setinputTimeFrom('12:00～')
        setStatus('x1200')
    }
    const handle1230 = () => {
        setinputTimeFrom('12:30～')
        setStatus('x1230')
    }
    const handle1300 = () => {
        setinputTimeFrom('13:00～')
        setStatus('x1300')
    }
    const handle1330 = () => {
        setinputTimeFrom('13:30～')
        setStatus('x1330')
    }
    const handle1400 = () => {
        setinputTimeFrom('14:00～')
        setStatus('x1400')
    }
    const handle1430 = () => {
        setinputTimeFrom('14:30～')
        setStatus('x1430')
    }
    const handle1500 = () => {
        setinputTimeFrom('15:00～')
        setStatus('x1500')
    }
    const handle1530 = () => {
        setinputTimeFrom('15:30～')
        setStatus('x1530')
    }
    const handle1600 = () => {
        setinputTimeFrom('16:00～')
        setStatus('x1600')
    }
    const handle1630 = () => {
        setinputTimeFrom('16:30～')
        setStatus('x1630')
    }
    const handle1700 = () => {
        setinputTimeFrom('17:00～')
        setStatus('x1700')
    }
    const handle1730 = () => {
        setinputTimeFrom('17:30～')
        setStatus('x1730')
    }
    const handle1800 = () => {
        setinputTimeFrom('18:00～')
        setStatus('x1800')
    }
    const handle1830 = () => {
        setinputTimeFrom('18:30～')
        setStatus('x1830')
    }
    const handle1900 = () => {
        setinputTimeFrom('19:00～')
        setStatus('x1900')
    }
    const handle1930 = () => {
        setinputTimeFrom('19:30～')
        setStatus('x1930')
    }
    const handle2000 = () => {
        setinputTimeFrom('20:00～')
        setStatus('x2000')
    }
    const handle2030 = () => {
        setinputTimeFrom('20:30～')
        setStatus('x2030')
    }
    const handle2100 = () => {
        setinputTimeFrom('21:00～')
        setStatus('x2100')
    }
    const handle2130 = () => {
        setinputTimeFrom('21:30～')
        setStatus('x2130')
    }
    const handle2200 = () => {
        setinputTimeFrom('22:00～')
        setStatus('x2200')
    }
    const handle2230 = () => {
        setinputTimeFrom('22:30～')
        setStatus('x2230')
    }
    const handle2300 = () => {
        setinputTimeFrom('23:00～')
        setStatus('x2300')
    }
    const handle2330 = () => {
        setinputTimeFrom('23:30～')
        setStatus('x2330')
    }
{/*-------------------------------------------------------------*/}
    const handle0930to = () => {
        setinputTimeTo('09:30　')
        setStatus2('z0930')
    }
    const handle1000to = () => {
        setinputTimeTo('10:00　')
        setStatus2('z1000')
    }
    const handle1030to = () => {
        setinputTimeTo('10:30　')
        setStatus2('z1030')
    }
    const handle1100to = () => {
        setinputTimeTo('11:00　')
        setStatus2('z1100')
    }
    const handle1130to = () => {
        setinputTimeTo('11:30　')
        setStatus2('z1130')
    }
    const handle1200to = () => {
        setinputTimeTo('12:00　')
        setStatus2('z1200')
    }
    const handle1230to = () => {
        setinputTimeTo('12:30　')
        setStatus2('z1230')
    }
    const handle1300to = () => {
        setinputTimeTo('13:00　')
        setStatus2('z1300')
    }
    const handle1330to = () => {
        setinputTimeTo('13:30　')
        setStatus2('z1330')
    }
    const handle1400to = () => {
        setinputTimeTo('14:00　')
        setStatus2('z1400')
    }
    const handle1430to = () => {
        setinputTimeTo('14:30　')
        setStatus2('z1430')
    }
    const handle1500to = () => {
        setinputTimeTo('15:00　')
        setStatus2('z1500')
    }
    const handle1530to = () => {
        setinputTimeTo('15:30　')
        setStatus2('z1530')
    }
    const handle1600to = () => {
        setinputTimeTo('16:00　')
        setStatus2('z1600')
    }
    const handle1630to = () => {
        setinputTimeTo('16:30　')
        setStatus2('z1630')
    }
    const handle1700to = () => {
        setinputTimeTo('17:00　')
        setStatus2('z1700')
    }
    const handle1730to = () => {
        setinputTimeTo('17:30　')
        setStatus2('z1730')
    }
    const handle1800to = () => {
        setinputTimeTo('18:00　')
        setStatus2('z1800')
    }
    const handle1830to = () => {
        setinputTimeTo('18:30　')
        setStatus2('z1830')
    }
    const handle1900to = () => {
        setinputTimeTo('19:00　')
        setStatus2('z1900')
    }
    const handle1930to = () => {
        setinputTimeTo('19:30　')
        setStatus2('z1930')
    }
    const handle2000to = () => {
        setinputTimeTo('20:00　')
        setStatus2('z2000')
    }
    const handle2030to = () => {
        setinputTimeTo('20:30　')
        setStatus2('z2030')
    }
    const handle2100to = () => {
        setinputTimeTo('21:00　')
        setStatus2('z2100')
    }
    const handle2130to = () => {
        setinputTimeTo('21:30　')
        setStatus2('z2130')
    }
    const handle2200to = () => {
        setinputTimeTo('22:00　')
        setStatus2('z2200')
    }
    const handle2230to = () => {
        setinputTimeTo('22:30　')
        setStatus2('z2230')
    }
    const handle2300to = () => {
        setinputTimeTo('23:00　')
        setStatus2('z2300')
    }
    const handle2330to = () => {
        setinputTimeTo('23:30　')
        setStatus2('z2330')
    }
    const handle2400to = () => {
        setinputTimeTo('24:00　')
        setStatus2('z2400')
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
                    <button onClick={handle0900} className={(status.indexOf('x0900')) < 0 ? "btnis-primary": "btnis-primary2"}>09:00</button>
                    <button onClick={handle0930} className={(status.indexOf('x0930')) < 0 ? "btnis-primary": "btnis-primary2"}>09:30</button>
                    <button onClick={handle1000} className={(status.indexOf('x1000')) < 0 ? "btnis-primary": "btnis-primary2"}>10:00</button>
                    <button onClick={handle1030} className={(status.indexOf('x1030')) < 0 ? "btnis-primary": "btnis-primary2"}>10:30</button>
                    <button onClick={handle1100} className={(status.indexOf('x1100')) < 0 ? "btnis-primary": "btnis-primary2"}>11:00</button>
                    <button onClick={handle1130} className={(status.indexOf('x1130')) < 0 ? "btnis-primary": "btnis-primary2"}>11:30</button>
                    <button onClick={handle1200} className={(status.indexOf('x1200')) < 0 ? "btnis-primary": "btnis-primary2"}>12:00</button>
                    <button onClick={handle1230} className={(status.indexOf('x1230')) < 0 ? "btnis-primary": "btnis-primary2"}>12:30</button>
                    <button onClick={handle1300} className={(status.indexOf('x1300')) < 0 ? "btnis-primary": "btnis-primary2"}>13:00</button>
                    <button onClick={handle1330} className={(status.indexOf('x1330')) < 0 ? "btnis-primary": "btnis-primary2"}>13:30</button>
                    <button onClick={handle1400} className={(status.indexOf('x1400')) < 0 ? "btnis-primary": "btnis-primary2"}>14:00</button>
                    <button onClick={handle1430} className={(status.indexOf('x1430')) < 0 ? "btnis-primary": "btnis-primary2"}>14:30</button>
                    <button onClick={handle1500} className={(status.indexOf('x1500')) < 0 ? "btnis-primary": "btnis-primary2"}>15:00</button>
                    <button onClick={handle1530} className={(status.indexOf('x1530')) < 0 ? "btnis-primary": "btnis-primary2"}>15:30</button>
                    <button onClick={handle1600} className={(status.indexOf('x1600')) < 0 ? "btnis-primary": "btnis-primary2"}>16:00</button>
                    <button onClick={handle1630} className={(status.indexOf('x1630')) < 0 ? "btnis-primary": "btnis-primary2"}>16:30</button>
                    <button onClick={handle1700} className={(status.indexOf('x1700')) < 0 ? "btnis-primary": "btnis-primary2"}>17:00</button>
                    <button onClick={handle1730} className={(status.indexOf('x1730')) < 0 ? "btnis-primary": "btnis-primary2"}>17:30</button>
                    <button onClick={handle1800} className={(status.indexOf('x1800')) < 0 ? "btnis-primary": "btnis-primary2"}>18:00</button>
                    <button onClick={handle1830} className={(status.indexOf('x1830')) < 0 ? "btnis-primary": "btnis-primary2"}>18:30</button>
                    <button onClick={handle1900} className={(status.indexOf('x1900')) < 0 ? "btnis-primary": "btnis-primary2"}>19:00</button>
                    <button onClick={handle1930} className={(status.indexOf('x1930')) < 0 ? "btnis-primary": "btnis-primary2"}>19:30</button>
                    <button onClick={handle2000} className={(status.indexOf('x2000')) < 0 ? "btnis-primary": "btnis-primary2"}>20:00</button>
                    <button onClick={handle2030} className={(status.indexOf('x2030')) < 0 ? "btnis-primary": "btnis-primary2"}>20:30</button>
                    <button onClick={handle2100} className={(status.indexOf('x2100')) < 0 ? "btnis-primary": "btnis-primary2"}>21:00</button>
                    <button onClick={handle2130} className={(status.indexOf('x2130')) < 0 ? "btnis-primary": "btnis-primary2"}>21:30</button>
                    <button onClick={handle2200} className={(status.indexOf('x2200')) < 0 ? "btnis-primary": "btnis-primary2"}>22:00</button>
                    <button onClick={handle2230} className={(status.indexOf('x2230')) < 0 ? "btnis-primary": "btnis-primary2"}>22:30</button>
                    <button onClick={handle2300} className={(status.indexOf('x2300')) < 0 ? "btnis-primary": "btnis-primary2"}>23:00</button>
                    <button onClick={handle2330} className={(status.indexOf('x2330')) < 0 ? "btnis-primary": "btnis-primary2"}>23:30</button>
                    </div>
                    <div id="right">
                    <button onClick={handle0930to} className={(status2.indexOf('z0930')) < 0 ? "btnis-primary": "btnis-primary2"}>09:30</button>
                    <button onClick={handle1000to} className={(status2.indexOf('z1000')) < 0 ? "btnis-primary": "btnis-primary2"}>10:00</button>
                    <button onClick={handle1030to} className={(status2.indexOf('z1030')) < 0 ? "btnis-primary": "btnis-primary2"}>10:30</button>
                    <button onClick={handle1100to} className={(status2.indexOf('z1100')) < 0 ? "btnis-primary": "btnis-primary2"}>11:00</button>
                    <button onClick={handle1130to} className={(status2.indexOf('z1130')) < 0 ? "btnis-primary": "btnis-primary2"}>11:30</button>
                    <button onClick={handle1200to} className={(status2.indexOf('z1200')) < 0 ? "btnis-primary": "btnis-primary2"}>12:00</button>
                    <button onClick={handle1230to} className={(status2.indexOf('z1230')) < 0 ? "btnis-primary": "btnis-primary2"}>12:30</button>
                    <button onClick={handle1300to} className={(status2.indexOf('z1300')) < 0 ? "btnis-primary": "btnis-primary2"}>13:00</button>
                    <button onClick={handle1330to} className={(status2.indexOf('z1330')) < 0 ? "btnis-primary": "btnis-primary2"}>13:30</button>
                    <button onClick={handle1400to} className={(status2.indexOf('z1400')) < 0 ? "btnis-primary": "btnis-primary2"}>14:00</button>
                    <button onClick={handle1430to} className={(status2.indexOf('z1430')) < 0 ? "btnis-primary": "btnis-primary2"}>14:30</button>
                    <button onClick={handle1500to} className={(status2.indexOf('z1500')) < 0 ? "btnis-primary": "btnis-primary2"}>15:00</button>
                    <button onClick={handle1530to} className={(status2.indexOf('z1530')) < 0 ? "btnis-primary": "btnis-primary2"}>15:30</button>
                    <button onClick={handle1600to} className={(status2.indexOf('z1600')) < 0 ? "btnis-primary": "btnis-primary2"}>16:00</button>
                    <button onClick={handle1630to} className={(status2.indexOf('z1630')) < 0 ? "btnis-primary": "btnis-primary2"}>16:30</button>
                    <button onClick={handle1700to} className={(status2.indexOf('z1700')) < 0 ? "btnis-primary": "btnis-primary2"}>17:00</button>
                    <button onClick={handle1730to} className={(status2.indexOf('z1730')) < 0 ? "btnis-primary": "btnis-primary2"}>17:30</button>
                    <button onClick={handle1800to} className={(status2.indexOf('z1800')) < 0 ? "btnis-primary": "btnis-primary2"}>18:00</button>
                    <button onClick={handle1830to} className={(status2.indexOf('z1830')) < 0 ? "btnis-primary": "btnis-primary2"}>18:30</button>
                    <button onClick={handle1900to} className={(status2.indexOf('z1900')) < 0 ? "btnis-primary": "btnis-primary2"}>19:00</button>
                    <button onClick={handle1930to} className={(status2.indexOf('z1930')) < 0 ? "btnis-primary": "btnis-primary2"}>19:30</button>
                    <button onClick={handle2000to} className={(status2.indexOf('z2000')) < 0 ? "btnis-primary": "btnis-primary2"}>20:00</button>
                    <button onClick={handle2030to} className={(status2.indexOf('z2030')) < 0 ? "btnis-primary": "btnis-primary2"}>20:30</button>
                    <button onClick={handle2100to} className={(status2.indexOf('z2100')) < 0 ? "btnis-primary": "btnis-primary2"}>21:00</button>
                    <button onClick={handle2130to} className={(status2.indexOf('z2130')) < 0 ? "btnis-primary": "btnis-primary2"}>21:30</button>
                    <button onClick={handle2200to} className={(status2.indexOf('z2200')) < 0 ? "btnis-primary": "btnis-primary2"}>22:00</button>
                    <button onClick={handle2230to} className={(status2.indexOf('z2230')) < 0 ? "btnis-primary": "btnis-primary2"}>22:30</button>
                    <button onClick={handle2300to} className={(status2.indexOf('z2300')) < 0 ? "btnis-primary": "btnis-primary2"}>23:00</button>
                    <button onClick={handle2330to} className={(status2.indexOf('z2330')) < 0 ? "btnis-primary": "btnis-primary2"}>23:30</button>
                    <button onClick={handle2400to} className={(status2.indexOf('z2400')) < 0 ? "btnis-primary": "btnis-primary2"}>24:00</button>
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