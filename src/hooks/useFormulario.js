//este es un custom Hooks para el manejo de formulario
//este hooks se encargará de asignar los cambios de valores de los formularios
//al State de formulario 
import { useState } from 'react'

const useFormulario = (inicial) => {
    const [formulario, setFormulario] = useState({ inicial })

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })
    }

    const reset = () => {
        setFormulario(inicial)
    }

    return [formulario, handleChange, reset]
}


export default useFormulario