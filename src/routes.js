import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './core/Home'
import AllUsers from './request page/AllUsers'
import FriendRequests from './request page/FriendRequests'
import Friends from './request page/Friends'
import SentRequests from './request page/SentRequest'
import SuggestedFriend from './request page/SuggestedFriend'
import Login from './user/login'
import SignUp from './user/SignUp'
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signUp' exact component={SignUp} />
                <Route path='/login' exact component={Login} />
                <Route path='/friends' exact component={Friends} />
                <Route path='/allUsers' exact component={AllUsers} />
                <Route path='/friendRequests' exact component={FriendRequests} />
                <Route path='/friendSuggestion' exact component={SuggestedFriend}/>                
            </Switch>            
        </BrowserRouter>
    )
}

export default Routes
