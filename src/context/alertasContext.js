import React, { useState, createContext } from 'react';

//Creando el context
export const AlertasContext = createContext();

//Provider
const AlertasProvider = props => {

    //State de movimientos
    const [ alerta, setAlerta ] = useState(null);

    //Funciones
    const mostrarAlerta = (msg, categoria) => {

        setAlerta({msg, categoria});

        setTimeout(() => {

            setAlerta(null);
        }, 3000);
    };
    
    return (

        <AlertasContext.Provider
            value={{
                alerta,
                mostrarAlerta    
            }}>

            {props.children}
        </AlertasContext.Provider>
    )
}

export default AlertasProvider;