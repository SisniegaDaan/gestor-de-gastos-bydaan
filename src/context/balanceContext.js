import React, { useState, useEffect, createContext } from 'react';

//Creando el context
export const BalanceContext = createContext();

//Provider
const BalanceProvider = props => {

    //State de movimientos
    const [movimientos, setMovimientos] = useState([]);
    //State de ingresos y gastos
    const [ingresos, setIngresos] = useState([]);
    const [gastos, setGastos] = useState([]);

    //State del balance (Se actualiza en cada cambio de estado de movimiento con useEffect)
    const [balance, setBalance] = useState("0");

    //Funciones
    const agregarMovimiento = movimiento => {
        setMovimientos([...movimientos, movimiento]);
    }

    const agregarIngreso = ingreso => {
        setIngresos([...ingresos, ingreso]);
    }

    const agregarGasto = gasto => {
        setGastos([...gastos, gasto]);
    }

    const actualizarBalance = (entradas, salidas) => {

        const balanceTotal = entradas - salidas;
        setBalance(balanceTotal.toString());
    }

/*     const eliminarMovimiento = movimientoEntrada => {
        //Eliminando el movimiento del state
        const nuevosMovimientos = movimientos.filter(movimiento => movimiento.id !== movimientoEntrada.id);
        setMovimientos(nuevosMovimientos);

        //Eliminar cantidad de ingresos o gastos
        if(movimientoEntrada.cantidad === true){ //Se elimina de ingresos

        }

    } */

    return (

        <BalanceContext.Provider
            value={{
                movimientos,
                ingresos,
                gastos,
                balance,
                agregarMovimiento,
                agregarIngreso,
                agregarGasto,
                actualizarBalance,
            }}>

            {props.children}
        </BalanceContext.Provider>
    )
}

export default BalanceProvider;