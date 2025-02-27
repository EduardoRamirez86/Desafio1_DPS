'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Clase({ horario, setClasesReservadas, clasesReservadas, claseNombre, dia }) {
    const reservarClase = () => {
        if (horario.cupos === 0) {
            alert('No hay cupos disponibles por el momento');
            return;
        }

        if (confirm(`¿Confirmar reserva para ${dia} a las ${horario.hora}?`)) {
            const claseExistente = clasesReservadas.find(c => c.id === horario.id);

            if (claseExistente) {
                const nuevasReservas = clasesReservadas.map(c =>
                    c.id === horario.id ? { ...c, cupos: c.cupos - 1 } : c
                );
                setClasesReservadas(nuevasReservas);
            } else {
                setClasesReservadas([
                    ...clasesReservadas,
                    { ...horario, claseNombre, dia, cupos: horario.cupos - 1 }
                ]);
            }
        }
    };

    const cancelarReserva = () => {
        if (confirm('¿Estas seguro que quieres cancelar la reserva de esta clase?')) {
            const nuevasReservas = clasesReservadas.map(c =>
                c.id === horario.id ? { ...c, cupos: c.cupos + 1 } : c
            ).filter(c => c.id !== horario.id || c.cupos > horario.cupos);

            setClasesReservadas(nuevasReservas);
        }
    };

    // Obtener la clase reservada actual
    const claseReservada = clasesReservadas.find(c => c.id === horario.id);
    const cuposDisponibles = claseReservada ? claseReservada.cupos : horario.cupos;
    const estaReservada = !!claseReservada;

    return (
        <div className="border rounded col-lg-4 m-2 p-3">
            <div className={estaReservada ? "bg-success text-white p-3" : "bg-light p-3"}>
                <h5>{claseNombre}</h5>
                <p><strong>Día:</strong> {dia}</p>
                <p><strong>Hora:</strong> {horario.hora}</p>
                <p><strong>Cupos:</strong> {cuposDisponibles}</p>

                {!estaReservada ? (
                    <button
                        className="btn btn-primary"
                        onClick={reservarClase}
                        disabled={cuposDisponibles === 0}
                    >
                        {cuposDisponibles === 0 ? 'Agotado' : 'Reservar'}
                    </button>
                ) : (
                    <button
                        className="btn btn-danger"
                        onClick={cancelarReserva}
                    >
                        Cancelar
                    </button>
                )}
            </div>
        </div>
    );
}

export default Clase;
