import { useState } from "react";

const TodoList = () => {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');

    const handleGetTask = (event) => {
        if (event.key === 'Enter' && event.target.value !== '') {
            setTaskList([...taskList, task]);
            event.target.value = '';
        }
    }

    const handleDeleteTask = (event) => {
        if (event.target.className === "delete fa-solid fa-xmark text-danger")
            setTaskList(taskList.filter((tarea, index) => index !== parseInt(event.currentTarget.id)));
    }

    const renderTask = () => {
        if (taskList.length === 0) {
            return <li className="list-group-item rounded-0 d-flex justify-content-between ps-5 fs-5">
                No hay tareas, añadir tareas</li>
        }
        return taskList.map((tarea, index) => {
            return <li
                key={crypto.randomUUID()}
                id={index}
                className="list-group-item rounded-0 d-flex justify-content-between ps-5 fs-5"
                onClick={(event) => handleDeleteTask(event)}>
                {tarea}
                <i className="delete fa-solid fa-xmark text-danger"></i>
            </li>;
        })
    }

    return (
        <div className="w-50">
            <h1 className="text-center display-1">todos</h1>
            <div className="card rounded-0">
                <ul className="list-group rounded-0">
                    <input
                        className="list-group-item rounded-0 ps-5 fs-5"
                        type="text"
                        placeholder="Tarea por hacer"
                        onChange={(event) => setTask(event.target.value)}
                        onKeyDown={(event) => handleGetTask(event)} />
                    {renderTask()}
                </ul>
                <div className="card-footer">
                    <h6 className="m-0 fs-6 fw-light text-body-tertiary">
                        {taskList.length} item left
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default TodoList;