const Pill = props => {

    const handleClick = props.onClick || (() => {});

    return (
        <button 
            className={`py-2.5 px-5 text-sm rounded-full ${props.active ? "bg-black text-white" : "text-black/[0.60] bg-pill"} ${props.customClasses}`}
            onClick={() => handleClick(props.index)}
        >
            {props.label}
        </button>
    )
}

export default Pill;