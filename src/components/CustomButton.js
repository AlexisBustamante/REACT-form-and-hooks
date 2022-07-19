import '../css/CustomButton.css'

const CustomButton = ({ children, ...rest }) => {

    return (
        <button className='button' {...rest}>{children}</button>
    )
}

export default CustomButton