import React from 'react';


function NavItem(props) {
    return (
        <li className="nav-item">
            <a href="#" className="nav-button">
                {props.content}
            </a>
        </li>
    );
}


export default NavItem;