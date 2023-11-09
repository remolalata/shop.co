const Button = props => {

    const handleClick = props.onClick || (() => {});

    return (
        <button type="button" onClick={handleClick} className={`${props.customClasses}`}>{props.children}</button>
    )
}

export default Button;