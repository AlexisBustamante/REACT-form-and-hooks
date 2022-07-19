import '../css/CustomInput.css'
//rest, son todas las demás propiedades
const CustomInput = ({ label, ...rest }) => {
    return (
        <div className="field">
            <label>{label}</label>
            <input {...rest} />
        </div>
    )
}
export default CustomInput