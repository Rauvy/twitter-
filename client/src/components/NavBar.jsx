import react from "react";
import { faHouse, faUser, faCog, faHashtag, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavBarElement from "./NavBarElement";
import "../../public/styles/sidebar.css";


function NavBar(){
    return(
        <aside className="sidebar">
      <ul>
        <li><NavBarElement text="Home" icon={faHouse}/></li>
        <li><NavBarElement text="Eplore" icon={faHashtag} /></li>
        <li><NavBarElement text="Notifications" icon={faBell} /></li>
        <li><NavBarElement text="Messages" icon={faEnvelope} /></li>
        <li><NavBarElement text="Profile" icon={faUser} /></li>
      </ul>
    </aside>
    );
}

export default NavBar;