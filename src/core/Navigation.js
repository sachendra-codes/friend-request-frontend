import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticted, signout } from '../auth/helper'
import NavOption from './NavOption'

const Navigation = (props) => {
    return (        
        <nav className="navbar navbar-expand navbar-dark bg-dark">                        
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavOption history = {props.history} path = '/' option = 'Home'/>
                    {isAuthenticted() && <NavOption history = {props.history} path = '/friends' option = 'Friends'/>}
                    {isAuthenticted() && <NavOption history = {props.history} path = '/friendRequests' option = 'Friend Requests'/>}        
                    {isAuthenticted() && <NavOption history = {props.history} path = '/friendSuggestion' option = 'Friend Suggestion'/>}
                    {isAuthenticted() && <NavOption history = {props.history} path = '/allUsers' option = 'All Users'/>}
                    {!isAuthenticted() && <NavOption history = {props.history} path = '/login' option = 'Sign In'/>}
                    {!isAuthenticted() && <NavOption history = {props.history} path = '/signUp' option = 'Sign Up'/>}
                    {isAuthenticted() && <li className='nav-item'>
                        <span
                            onClick={() => {
                            signout(() => {
                                props.history.push('/')
                            })
                            }}
                        >
                            <Link className='nav-link' style={{ color: '#FFFFFF' }}>
                            Signout
                            </Link>
                        </span>
                    </li>}
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navigation)
