import React, { useContext, useEffect } from 'react';
//Context
import { BalanceContext } from '../context/balanceContext';

const Balance = () => {

    const { movimientos, ingresos, gastos, balance, actualizarBalance } = useContext(BalanceContext);

    let ingresosTotales;
    let gastosTotales;

    const reducer = (acumulador, valorActual) => acumulador + valorActual;


    useEffect(() => {


        if (movimientos.length !== 0) {

            //Sumando ingresos y sumando gastos
            if (ingresos.length !== 0) {
                ingresosTotales = ingresos.reduce(reducer);
            } else {
                ingresosTotales = 0;
            }

            if (gastos.length !== 0) {
                gastosTotales = gastos.reduce(reducer);
            } else {
                gastosTotales = 0;
            }

            actualizarBalance(ingresosTotales, gastosTotales);
        }

    }, [movimientos]);

    console.log(ingresosTotales);

    return (

        <div className="row justify-content-center">
            <div className="col-md-8 col-sm-9 mt-2">
                <div className="card">
                    <div className="card-body text-center pt-2 pb-2">

                        <p className="mb-1 ">Balance del mes:</p>

                        {balance >= 0 ?
                            (<h1 className="balance font-weight-bold mt-0">${balance}</h1>) :
                            (<h1 className="font-weight-bold text-danger">-${balance.slice(1, balance.length)}</h1>)}

                        <br />

                        <div className="balance__stats row justify-content-around">
                            <div className="ingresos text-success">
                                <h2>Ingresos:</h2>

                                {ingresos.length !== 0 ? <p>+${ingresos.reduce(reducer)}</p> : <p>Sin ingresos</p>}
                                
                            </div>
                            <div className="gastos text-danger">
                                <h2>Gastos:</h2>

                                {gastos.length !== 0 ? ( <p>-${gastos.reduce(reducer)}</p> ) : ( <p>Sin gastos</p>)}
                               
                            </div>
                        </div>

                        <button className="btn--decoration">
                            <p className="m-0 text-secondary">Ver analíticas</p>
                            <i className="fas fa-chevron-down"></i>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Balance;