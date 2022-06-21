import NavbarManager from "./navbarManager"
import { useSelector } from "react-redux"
import NavbarUser from "./NavbarUser";
import NavbarGuest from "./NavbarGuest";
import "../stylePages/Navbar.css";

export default function Navbar() {
let currentUser1=useSelector(state=>state.u.currentUser);
    return (
       <>
       {currentUser1?.status=="manager" ?
       <NavbarManager />:
       currentUser1?.status=="user"?
       <NavbarUser />:
        <NavbarGuest />
       }
</>
    )
}