import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBell,
    faCaretDown,
    faChevronCircleRight,
    faCog,
    faComment,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faPlus,
    faBell,
    faComment,
    faCaretDown,
    faCog,
    faChevronCircleRight
);

function App() {
    return (
        <div>
            <Navbar>
                <NavItem icon={<FontAwesomeIcon icon='plus' />} />
                <NavItem icon={<FontAwesomeIcon icon='bell' />} />
                <NavItem icon={<FontAwesomeIcon icon='comment' />} />

                <NavItem icon={<FontAwesomeIcon icon='caret-down' />}>
                    <DropdownMenu />
                </NavItem>
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
    const [open, setOpen] = useState(false);
    return (
        <li className='nav-item'>
            <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

function DropdownMenu() {
    function DropdownItem(props) {
        return (
            <a href='#' className='menu-item'>
                <span className='icon-button'>{props.leftIcon}</span>
                {props.children}
                <span className='icon-right'>{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <>
            <div className='dropdown'>
                <DropdownItem>My Profile</DropdownItem>
                <DropdownItem
                    leftIcon={<FontAwesomeIcon icon='cog' />}
                    rightIcon={
                        <FontAwesomeIcon icon='Chevron-Circle-Right' />
                    }></DropdownItem>
            </div>
        </>
    );
}

export default App;
