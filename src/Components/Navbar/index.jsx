import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {ShoppingCardContext} from '../../Context'

const Navbar = () =>{
    const context = useContext(ShoppingCardContext)
    const activeStyle = 'underline underline-offset-4'
    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                    SaraMara
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Productos' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                    Productos
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Rituales' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                    Rituales
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Nosotros' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                     Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Blog' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                    Blog
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Contacto' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                    Contacto
                    </NavLink>
                </li>
            
            </ul>

            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    SaraMara@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                    MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                    My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' 
                    className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }>
                     Sign In
                    </NavLink>
                </li>
                <li>
                    C {context.count}        
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;