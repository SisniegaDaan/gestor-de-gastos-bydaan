import React, { useState, useContext } from 'react';
//Context
import BalanceProvider from './context/balanceContext';
import AlertasProvider from './context/alertasContext';
//Bootstrap styled components
import { Modal, Button } from 'react-bootstrap';
//Componentes
import Navbar from "./components/Navbar";
import Balance from "./components/Balance";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";


function App() {

  const [modal, setModal] = useState(false);

  return (
    <BalanceProvider>
      <AlertasProvider>

        <section className="application">
          <Navbar />

          <div className="container">
            <Balance />
            <Listado />

            <Modal show={modal}>
              <Modal.Header>

                <h2 className="font-weight-bold">Ingresa un movimiento</h2>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setModal(!modal)}>
                  <span aria-hidden="true">&times;</span>
                </button>

              </Modal.Header>

              <Formulario modal={modal} setModal={setModal} />

            </Modal>

            <button className="btn btn-flotante">
              <h2 className="font-weight-bold" onClick={() => setModal(!modal)}>Agregar Movimiento</h2>
            </button>

          </div>
        </section>


      </AlertasProvider>
    </BalanceProvider>
  );
}

export default App;
