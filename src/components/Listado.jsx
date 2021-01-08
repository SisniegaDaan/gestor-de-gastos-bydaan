import React, { useContext } from 'react';
//Context
import { BalanceContext } from '../context/balanceContext';

//Componentes
import Movimiento from './Movimiento';

const Listado = () => {

    const { movimientos } = useContext(BalanceContext)
    return (
        <div className="row justify-content-center mt-3 listado">
            <div className="col-md-8 col-sm-9">
                <h2 className="text-left font-weight-bold">Tus movimientos de Enero: </h2>
                {movimientos.length !== 0 ? (movimientos.map(movimiento => (
                    <Movimiento
                        key={movimiento.id}
                        movimiento={movimiento} />
                ))) : (<p className="text-secondary text-center">No hay movimientos, inicia creando uno...</p>)}
            </div>
        </div>


    );
}

export default Listado;