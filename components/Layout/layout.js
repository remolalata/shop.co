import { useMainContext } from "@/context/MainContext";
import { setToggleMenu } from "@/actions/mainActions";

const Layout = props => {

    const { state, dispatch } = useMainContext();

    const overlayStyles = state.toggleMenu 
    ? "fixed inset-0 bg-black opacity-50 z-40"
    : "hidden";

    const handleToggleMenuClick = () => {
        dispatch(setToggleMenu(!state.toggleMenu))
    }

    return (
        <div className={`antialiased ${props.customClasses}`}>
            <div className={overlayStyles} onClick={handleToggleMenuClick}></div>
            <main className={`${props.customClasses}`}>{props.children}</main>
        </div>
    )
}

export default Layout;