import CoreUseDefi from "../UseDefi/CoreUseDefi/CoreUseDefi";
import { Outlet } from "react-router-dom";
import NavbarUseDefi from "../UseDefi/NavbarUseDefi/NavbarUseDefi";
const UseDefiPage = () => {

    return(
        <>
        <NavbarUseDefi/>
        {/* <CoreUseDefi/> */}
        <Outlet/>
        </>
    )
}



export default UseDefiPage;