import React, { useState, createContext } from 'react';

//Creando el context
export const AlertasContext = createContext();

//Provider
const AlertasProvider = props => {

    //State de movimientos
    const [ alerta, setAlerta ] = useState({msg: "", categoria: ""});
    
    return (

        <AlertasContext.Provider
            value={{
                alerta,
                setAlerta
                
            }}>

            {props.children}
        </AlertasContext.Provider>
    )
}

export default AlertasProvider;