import React, { useState, useContext, Fragment } from 'react';
import { v4 as uuid } from 'uuid';
//Bootstrap Styled Component
import { Modal, Button } from 'react-bootstrap';
//Importanto Context
import {BalanceContext} from '../context/balanceContext';
import {AlertasContext} from '../context/alertasContext';

const Formulario = ({ modal, setModal }) => {

    //Importando state del context
    const { agregarMovimiento, agregarIngreso, agregarGasto } = useContext(BalanceContext);
    const { alerta, mostrarAlerta } = useContext(AlertasContext);

    //State local de movimiento ingresado en el formulario
    const [movimiento, setMovimiento] = useState({ nombre: "", cantidad: "", estado: true, fecha: "", id: "" });
    const { nombre, cantidad, estado } = movimiento;

    //State del boton ingreso-gasto
    const [ingreso, setIngreso] = useState(true);

    //Funciones
    const handleChange = e => {
        setMovimiento({ ...movimiento, [e.target.name]: e.target.value })
    }

    const handleClick = e => {
        e.preventDefault();
        setIngreso(!ingreso);
    }

    //Enviar movimiento al state global
    const handleSubmit = e => {
        e.preventDefault();
        //Validar formulario
        if (nombre === "" || cantidad <= 0) {
            console.log("Error");
            mostrarAlerta("Llena todos los campos correctamente", "alert alert-danger")
            return;
        }

        //Agregando estado al movimiento
        if (ingreso) {
            setMovimiento(movimiento.estado = true);
        } else {
            setMovimiento(movimiento.estado = false);
        }

        //Agregando fecha e id al movimiento
        const date = new Date();
        setMovimiento(movimiento.fecha = date.getDate(), movimiento.id = uuid());

        //Si ingreso es true agregar a state de ingresos si es false agregar al state de gastos
        if (ingreso) {
            agregarIngreso(parseInt(cantidad));
        } else {
            agregarGasto(parseInt(cantidad));
        }

        //Agregar el movimiento al state
        agregarMovimiento(movimiento);
        //Cerrar modal
        setModal(!modal);
    }

    return (
        <Fragment>
            <Modal.Body>
                <form>

                    {alerta ? (<p className={alerta.categoria}> {alerta.msg} </p>) : null}
                    <div className="form-group mt-0 ml-3 mr-3">
                        <label htmlFor="nombre">Nombre del movimiento: </label>
                        <input
                            type="text"
                            className="form-control mb-4"
                            placeholder="Ingresa el nombre"
                            name="nombre"
                            value={nombre}
                            id="nombre"
                            onChange={handleChange}
                        />

                        <label htmlFor="cantidad">Cantidad: </label>
                        <input
                            type="number"
                            className="form-control mb-4"
                            placeholder="Ingresa el precio"
                            name="cantidad"
                            value={cantidad}
                            id="cantidad"
                            onChange={handleChange} />

                        <label htmlFor="cantidad">Tipo de movimiento: </label>

                        <br></br>

                        {ingreso ? (
                            <button
                                className="btn btn-primary btn-status"
                                onClick={handleClick}> Ingreso </button>)
                            : (
                                <button
                                    className="btn btn-danger btn-status "
                                    onClick={handleClick}> Gasto </button>
                            )
                        }
                    </div>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <button
                    className="btn font-weight-bold btn-formulario"
                    onClick={handleSubmit}>
                    Agregar movimiento
                </button>
            </Modal.Footer>
        </Fragment>
    );
}

export default Formulario;