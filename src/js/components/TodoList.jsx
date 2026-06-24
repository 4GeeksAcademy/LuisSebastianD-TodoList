import { useState } from "react";

const TodoList = () => {
    const [tareas, setTareas] = useState([]);
    const [botonEliminar, setBotonEliminar] = useState([]);

    const handleEliminarTarea = (event) => {
        if (event.target.className === "fa-solid fa-xmark text-danger")
            setTareas(tareas.filter((tarea, index) => index !== parseInt(event.currentTarget.id)));
    }

    const handleMostrarBotonEliminar = (event) => {
        setBotonEliminar(botonEliminar.map((valor, index) => (index === parseInt(event.currentTarget.id) ? true : false)));
    }

    const handleQuitarBotonEliminar = () => {
        setBotonEliminar(botonEliminar.map(() => false));
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
                        onKeyDown={(event) => {
                            if (event.key === 'Enter' && event.target.value !== '') {
                                setTareas([...tareas, event.target.value]);
                                setBotonEliminar([...botonEliminar, false]);
                                event.target.value = '';
                            }
                        }
                        } />
                    {tareas.length === 0 ? <li className="list-group-item rounded-0 d-flex justify-content-between ps-5 fs-5">
                        No hay tareas, añadir tareas</li> :
                        tareas.map((tarea, index) => {
                            return <li
                                key={crypto.randomUUID()}
                                id={index}
                                className="list-group-item rounded-0 d-flex justify-content-between ps-5 fs-5"
                                onMouseEnter={(event) => handleMostrarBotonEliminar(event)}
                                onMouseLeave={handleQuitarBotonEliminar}
                                onClick={(event) => handleEliminarTarea(event)}>
                                {tarea}{botonEliminar[index] === true ? <i className="fa-solid fa-xmark text-danger"></i> : ''}
                            </li>;
                        })}
                </ul>
                <div className="card-footer">
                    <h6 className="m-0 fs-6 fw-light text-body-tertiary">{tareas.length} item left</h6>
                </div>
            </div>
        </div>
    )
}

export default TodoList;