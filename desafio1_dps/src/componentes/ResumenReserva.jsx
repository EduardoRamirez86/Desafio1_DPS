'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ResumenReserva({clasesReservadas}) {
    const totalReservas = clasesReservadas.length;
    
    return(
        <div className="border p-3">
            <h4>Resumen de Reservas</h4>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Clase</th>
                        <th>Día</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {clasesReservadas.map(clase => (
                        <tr key={clase.id}>
                            <td>{clase.claseNombre}</td>
                            <td>{clase.dia}</td>
                            <td>{clase.hora}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total reservas:</td>
                        <td>{totalReservas}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default ResumenReserva;