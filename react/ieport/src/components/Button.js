function Button({label}){
    return <button>{label}</button>
}

function ButtonProp(props){
    return <button>{props.children}</button>
}
function ButtonChild({children}){
    return <button>{children}</button>
}

export default Button;


export {ButtonProp, ButtonChild};