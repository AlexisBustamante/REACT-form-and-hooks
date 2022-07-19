import CustomInput from './CustomInput'
import CustomButton from './CustomButton'
import useFormulario from '../hooks/useFormulario'

const UserForm = ({ submit }) => {
    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        lastName: '',
        email: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(formulario)
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <CustomInput
                label='Nombre'
                name="name"
                value={formulario.name}
                onChange={handleChange}
                placeholder='Nombre'
            />
            <CustomInput
                label='Apellido'
                name="lastName"
                value={formulario.lastName}
                onChange={handleChange}
                placeholder='Apellido'

            />
            <CustomInput
                label='Correo'
                name="email"
                value={formulario.email}
                onChange={handleChange}
                placeholder='Correo'
            />
            <CustomButton
            >Enviar</CustomButton>
        </form>

    )
}

export default UserForm