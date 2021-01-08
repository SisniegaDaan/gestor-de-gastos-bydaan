import React, { useState, useEffect, createContext } from 'react';

//Creando el context
export const BalanceContext = createContext();

//Provider
const BalanceProvider = props => {

    //State de movimientos
    const [movimientos, setMovimientos] = useState([]);
    //State de ingresos y gastos
    const [ingresos, setIngresos] = useState(0);
    const [gastos, setGastos] = useState(0);

    //State del balance (Se actualiza en cada cambio de estado de movimiento con useEffect)
    const [balance, setBalance] = useState("0");

    //Funciones
    const agregarMovimiento = movimiento => {
        setMovimientos([...movimientos, movimiento]);
    }

    const agregarIngreso = ingreso => {
        setIngresos(ingresos + ingreso);
    }

    const agregarGasto = gasto => {
        setGastos(gastos + gasto);
    }

    const actualizarBalance = (entradas, salidas) => {

        const balanceTotal = entradas - salidas;
        setBalance(balanceTotal.toString());
    }

    const eliminarMovimiento = movimientoInfo => {

        //Actualizar movimientos
        setMovimientos(movimientos.filter(movimiento => movimiento.id !== movimientoInfo.id));

        //Actualizar ingresos/gastos
        if (movimientoInfo.estado) {
            setIngresos(ingresos - movimientoInfo.cantidad);
        } else {
            setGastos(gastos - movimientoInfo.cantidad);
        }

        //Actualizar el state del balance
        setBalance((ingresos - gastos).toString());
    }

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
                eliminarMovimiento
            }}>

            {props.children}
        </BalanceContext.Provider>
    )
}

export default BalanceProvider;