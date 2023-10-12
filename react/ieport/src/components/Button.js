// function Button({label}){
//     return <button>{label}</button>
// }

function ButtonProp(props){
    return <button>{props.children}</button>
}

// To get dyanmic props from parent
function ButtonChild({children}){
    return <button>{children}</button>
}


// Below Button, FacebookButton, GoogleButton is example of 
// Composition

function Button({children, style, ...rest}){
    return <button {...rest} style={{
        border:0,
        padding: "10px 30px",
        borderRadius: "4px",
        ...style

    }}  >{children}</button>
}



function FacebookButton({children, ...rest}){
    // here we are using Button functional component into other functional components
    return <Button {...rest} style={{
        backgoundColor: 'blue',
        color:"black"
    }}  >
        <span>F- </span>
        <span>{children}</span>
    </Button>
}

function GoogleButton({children, ...rest}){
    return <Button {...rest} style={{
        backgoundColor: 'red',
        color:"black"
    }}  >
        <span>G- </span>
        <span>{children}</span>
    </Button>
}


export default Button;


export {ButtonProp, ButtonChild, FacebookButton, GoogleButton};