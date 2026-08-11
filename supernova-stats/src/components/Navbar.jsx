import {NavLink} from "react-router-dom"
import supernova from '../assets/images/supernova.png'

    function Navbar(){
    return (

        <nav className="navbar">
        
        <NavLink to="/">
        <img className="supernova"
        src={supernova}
        alt="supernova stats logo"
        />
        </NavLink>

        <NavLink to="/heroes" className={({isActive}) => isActive ? "active" : ""}
        >
        Heroes
        </NavLink> 

         <NavLink to="/leaderboard"className={({isActive}) => isActive ? "active" : ""}
         >
        Leaderboard
        </NavLink> 

         <NavLink to="/items" className={({isActive}) => isActive ? "active" : ""}
         >
        Items
        </NavLink>   

         <NavLink to="/player" className={({isActive}) => isActive ? "active" : ""}
         >
        Search Player
        </NavLink> 

        </nav>
    )
}  

export default Navbar