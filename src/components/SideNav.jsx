import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className='sidebar'>
            <div className='logo__content'>
                <NavLink to={'/'}>
                <img src='/logo_zen_hogar.svg' alt='Dashboard Logo' className='logo' />
                </NavLink>
            </div>
            <ul className='navlist'>
                <li>
                    <i className='bx bx-search' ></i>
                    <input type="text" placeholder= "Busquemos algo..."/>
                    <span className="tooltip">Buscar</span>
                </li>
                <li>
                    <NavLink to={'/'}>
                        <i className='bx bxs-home' ></i>
                        <span className='links__name'>Home</span>
                    </NavLink>
                    <span className="tooltip">Volver al home</span>
                </li>
                <li>
                    <NavLink to={'products'}>
                        <i className='bx bxs-package' ></i>
                        <span className='links__name'>Productos</span>
                    </NavLink>
                    <span className="tooltip">Detalle de productos</span>
                </li>
                <li>
                    <NavLink to={'users'}>
                        <i className='bx bx-user'></i>
                        <span className='links__name'>Usuarios</span>
                    </NavLink>
                    <span className="tooltip">Detalle de usuarios</span>
                </li>
                <li>
                    <NavLink to={'categories'}>
                        <i className='bx bx-category'></i>
                        <span className='links__name'>Categorias</span>
                    </NavLink>
                    <span className="tooltip">Detalle de categorias</span>
                </li>
            </ul>

        </div>
    )
}

export default SideNav