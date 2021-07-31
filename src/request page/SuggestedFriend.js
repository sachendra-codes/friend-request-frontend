import React, { useState } from 'react'
import Base from '../core/Base'
import { addFriend, allUsers, friendRequests, friends, pendingRequests, sendRequest, suggestedFriend } from './helper'

const SuggestedFriend = () => {     
    const curUser = JSON.parse(localStorage.getItem('jwt')).user;
    const [usersList, setusersList] = useState([])      
    suggestedFriend().then((users)=>{
        let friendIds = []
        let finalUsers = []
        let pendingRequestsIds = [] 
        let friendRequestsIds = []        
        friends().then((allFriends)=>{
            allFriends.forEach(friend => {
                friendIds.push(friend._id)
            });
            pendingRequests().then((allPendingRequests)=>{
                allPendingRequests.forEach((request)=>{
                    pendingRequestsIds.push(request._id)
                })
                friendRequests().then((allFriendRequests)=>{
                    allFriendRequests.forEach((request)=>{
                        friendRequestsIds.push(request._id)
                    })
                    for(let i = 0; i<users.length; i++){
                        if(curUser._id == users[i]._id) continue
                        if(friendIds.includes(users[i]._id))continue
                        else if(pendingRequestsIds.includes(users[i]._id)){
                            finalUsers.push({...users[i], isFriend : false, isPending : false, isSent : true})
                        }
                        else if(friendRequestsIds.includes(users[i]._id)){
                            finalUsers.push({...users[i], isFriend : false, isPending : true, isSent : false})
                        }
                        else {
                            finalUsers.push({...users[i], isFriend : false, isPending : false, isSent : false})
                        }                
                    }            
                    setusersList(finalUsers) 
                })                
            })            
        })              
    }).catch((err)=>{
        console.log(err)
    })
    
    const usersTable = ()=>{
        return <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
        <table className="table ">
                <thead>
                    <tr>                
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>            
                    </tr>
                </thead>
                <tbody>
                {usersList.map(function(user, i){
                    if(user.isFriend){
                        return <tr key={i}>                
                        <td>{user.name}</td>                        
                            <td><button                             
                            type="button" className="btn btn-secondary disabled">Friends</button></td>
                        </tr>     
                        
                    }
                    else if(user.isSent){
                        return <tr key={i}>                
                        <td>{user.name}</td>                        
                            <td><button                             
                            type="button" className="btn btn-secondary disabled">Pending</button></td>
                        </tr>    
                    }
                    else if(user.isPending){
                        return <tr key={i}>                
                        <td>{user.name}</td>                        
                            <td><button 
                            onClick={()=>{
                                addFriend(user._id)
                            }}
                            type="button" className="btn btn-success">Accept</button></td>
                        </tr>     
                    }
                    else{
                        return <tr key={i}>                
                        <td>{user.name}</td>                        
                            <td><button 
                            onClick={()=>{
                                sendRequest(user._id)
                            }}
                            type="button" className="btn btn-info">Add</button></td>
                        </tr>      
                    }              
                })}                        
                </tbody>
            </table>
        </div>
      </div>          
    } 
    return(
        <Base >
            {usersTable()}
        </Base>
    )   
}

export default SuggestedFriend
