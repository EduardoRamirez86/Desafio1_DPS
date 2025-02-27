'use client';
import clases from '../app/clases';
import 'bootstrap/dist/css/bootstrap.min.css';

function SelectorClase({setTipoSeleccionado}) {
    const handleChange = (e) => {
        setTipoSeleccionado(Number(e.target.value));
    }

    return(
        <div className='d-flex align-items-center flex-column col-lg-8'>
            <h2 className='text-center mt-5 mb-2'>Selecciona el tipo de clase</h2>
            <select className='w-50 form-select m-3' onChange={handleChange}>
                <option value='0'>Todas las clases</option>
                {clases.map(clase => (
                    <option value={clase.id} key={clase.id}>{clase.nombre}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectorClase;