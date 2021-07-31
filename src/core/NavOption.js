import React from 'react'
import { Link } from 'react-router-dom'
const currentTab = (history, path) => {
    if (history.location.pathname === path) {
      return { color: '#2ecc72' }
    } else {
      return { color: '#FFFFFF' }
    }
}
const NavOption = (props) => {
    return (        
        <li className="nav-item">
            <Link 
                className="nav-link" 
                to={props.path} 
                style={currentTab(props.history, props.path)}>{props.option}
            </Link>
        </li>        
    )
}

export default NavOption
