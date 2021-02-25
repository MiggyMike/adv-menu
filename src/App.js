import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComment, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faBell, faComment);

function App() {
    return (
        <div>
            <Navbar>
                <NavItem icon={<FontAwesomeIcon icon='plus' />} />
                <NavItem icon={<FontAwesomeIcon icon='bell' />} />
                <NavItem icon={<FontAwesomeIcon icon='comment' />} />
            </Navbar>
        </div>
    );
}

function Navbar(props) {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav'>{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    return (
        <li className='nav-item'>
            <a href='#' className='icon-button'>
                {props.icon}
            </a>
        </li>
    );
}

export default App;
