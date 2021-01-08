import React, { useState, useContext } from 'react';
//Context
import {BalanceContext} from '../context/balanceContext';

const Movimiento = ({ movimiento }) => {

    //State para el boton de check
    const [check, setCheck] = useState(false);
    //Context de Balance
    const { eliminarMovimiento } = useContext(BalanceContext);

    const handleClick = () => {

        eliminarMovimiento(movimiento);  
    };

    return (

        <div className="card mt-3">
            <div className="movimiento__flex card-body p-3">

                <div className="movimiento__leftside">
                    {check ? (
                        <button
                        type="button"
                        className="btn btn-primary mr-2 btn-check"
                        onClick={() => setCheck(!check)}></button>
                    ) : 
                    (
                        <button
                        type="button"
                        className="btn btn-danger mr-2 btn-check"
                        onClick={() => setCheck(!check)}></button>

                    )}
                    
                    <h2 className="font-weight-bold m-0">{movimiento.nombre}</h2>
                </div>


                <div className="movimiento__info">

                    {movimiento.estado === true ?
                        (<p className="m-0 text-success">+${movimiento.cantidad}</p>) :
                        (<p className="m-0 text-danger">-${movimiento.cantidad}</p>)}

                    <button onClick={ handleClick } className="btn--decoration">
                        <i className="fas fa-chevron-down"></i>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Movimiento;