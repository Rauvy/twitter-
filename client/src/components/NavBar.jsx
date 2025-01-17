import react from "react";
import { faHouse, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import NavBarElement from "./NavBarElement";


function NavBar(){
    return(
        <div className="nav-bar">
            <NavBarElement text="Home" icon={faHouse}/>
        </div>
    );
}

export default NavBar;