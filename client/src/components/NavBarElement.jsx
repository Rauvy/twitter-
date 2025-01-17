import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import "../../public/styles/navBarElement.css";

function NavBarComponent(){
    return(
        <button className='nav-element'>
           <FontAwesomeIcon icon={faHouse} className="navbar-icon" />
            Home
        </button>
    );
}

export default NavBarComponent;