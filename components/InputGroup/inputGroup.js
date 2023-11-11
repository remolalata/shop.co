import Image from "next/image";

const InputGroup = props => {
    return (
        <div className={`flex rounded-full bg-white text-black/[0.4] px-4 py-3 ${props.customClasses}`}>
            {props.icon && <Image src={props.icon} width={24} height={24} alt="" className="mr-3" />}
            <input
                type="text"
                placeholder={props.placeholder}
                className="w-full hover:bg-transparent hover:outline-none focus:outline-none text-black placeholder:text-black/[0.40]"
            />
        </div >
    )
}

export default InputGroup;