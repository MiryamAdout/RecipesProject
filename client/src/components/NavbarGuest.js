
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../stylePages/Navbar.css";
import IconButton from '@mui/material/IconButton';
import {  useSelector } from "react-redux"


export default function NavbarGuest() {

    let currentUser = useSelector(state => state.u.currentUser);

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link" >הבית</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" >כניסה</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link" >הרשמה</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link" ><IconButton color="secondary" aria-label="add to shopping cart" >
                                <ShoppingCartIcon className="iconCartGuest" />
                            </IconButton></Link>
                        </li>
                    </ul>
                </div>

            </nav>

            <Outlet />
        </>
    )
}