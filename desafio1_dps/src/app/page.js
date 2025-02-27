'use client';
import SelectorClase from "../componentes/SelectorClase";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumenReserva from "../componentes/ResumenReserva";
import { useState } from "react";
import ListaClases from "../componentes/ListaClases";
import "../css/home.css"; 

export default function Home() {
  const [clasesReservadas, setClasesReservadas] = useState([]);
  const [tipoSeleccionado, setTipoSeleccionado] = useState(0);

  return (
    <div>
      <header className="header-background">
        <div className="header-content">
          <h1 className="display-2 fw-bold">¡Bienvenido a GYM DPS 441!</h1>
          <a href="#explore" className="btn btn-lg btn-outline-light mt-3">Ver clases</a>
        </div>
      </header>
      
      <section id="explore" className="section-black">
        <div className="container-fluid p-5">
          <div className="row g-4">
            
            <div className="col-lg-2">
              <div className="card border-0 shadow">
                <div className="card-header bg-purple">
                  <h5 className="mb-0">Selecciona una Clase</h5>
                </div>
                <div className="card-body">
                  <SelectorClase setTipoSeleccionado={setTipoSeleccionado} />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-header bg-purple">
                  <h5 className="mb-0">Clases Disponibles</h5>
                </div>
                <div className="card-body">
                  <ListaClases
                    tipoSeleccionado={tipoSeleccionado}
                    setClasesReservadas={setClasesReservadas}
                    clasesReservadas={clasesReservadas}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="card border-0 shadow">
                <div className="card-header bg-purple">
                  <h5 className="mb-0">Resumen de Reservas</h5>
                </div>
                <div className="card-body">
                  <ResumenReserva clasesReservadas={clasesReservadas} />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
