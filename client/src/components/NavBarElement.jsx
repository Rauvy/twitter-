import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../../public/styles/navBarElement.css";

function NavBarComponent({ text, icon }){
    return(
        <button className='nav-element'>
           <FontAwesomeIcon icon={icon} className="navbar-icon" />
            {text}
        </button>
    );
}

export default NavBarComponent;