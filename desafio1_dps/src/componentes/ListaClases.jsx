'use client';
import clases from '../app/clases';
import React from 'react';
import Clase from '../componentes/ReservaClase';
import 'bootstrap/dist/css/bootstrap.min.css';

function ListaClases({tipoSeleccionado, setClasesReservadas, clasesReservadas}) {
    return(
        <div className='container'>
            {clases
                .filter(clase => tipoSeleccionado === 0 || clase.id === tipoSeleccionado)
                .map((clase) => (
                    <div key={clase.id} className='mb-5'>
                        <h2 className='mb-4'>{clase.nombre}</h2>
                        {clase.dias.map((diaData) => (
                            <div key={`${clase.id}-${diaData.dia}`} className='mb-4'>
                                <h4 className='text-secondary'>{diaData.dia}</h4>
                                <div className='row'>
                                    {diaData.horarios.map((horario) => (
                                        <Clase
                                            key={horario.id}
                                            horario={horario}
                                            setClasesReservadas={setClasesReservadas}
                                            clasesReservadas={clasesReservadas}
                                            claseNombre={clase.nombre}
                                            dia={diaData.dia}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
}

export default ListaClases;