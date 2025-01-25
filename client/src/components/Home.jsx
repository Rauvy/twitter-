import react from 'react';
import NavBar from './NavBar';
import Feed from "./Feed";
import Widgets from './Widgets';
import Logo from './Logo';
import "../../public/styles/home.css";
function Home(){
    return(
        <div className='app'>
            <Logo />
            <div className='app-content'>
                <NavBar />
                <Feed />
                <Widgets />
            </div>
        </div>
    );
}

export default Home;