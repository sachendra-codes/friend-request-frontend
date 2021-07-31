import React, { useState } from 'react'
import Base from '../core/Base'
import { addFriend, friendRequests, friends, rejectRequest, removeFriend } from './helper'

const FriendRequests = () => {     
    const [requestList, setrequestList] = useState([])      
    friendRequests().then((data)=>{
        setrequestList(data)
    }).catch(()=>{
        console.log('No friends')
    })
    
    const friendTable = ()=>{
        return <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
        <table className="table ">
                <thead>
                    <tr>                
                    <th scope="col">Name</th>
                    <th scope="col">Accept</th>                    
                    <th scope="col">Reject</th>     
                    </tr>
                </thead>
                <tbody>
                {requestList.map(function(friend, i){
                    return <tr key={i}>                
                    <td>{friend.name}</td>
                        <td><button 
                        onClick={()=>{
                            addFriend(friend._id)
                        }} 
                        type="button" className="btn btn-success">Accept</button></td>
                        <td><button 
                        onClick={()=>{
                            rejectRequest(friend._id)
                        }}
                         type="button" className="btn btn-danger">Reject</button></td>
                    </tr>                    
                })}                        
                </tbody>
            </table>
        </div>
      </div>          
    } 
    return(
        <Base title='Sign Up page' description='A page for user signup!'>
            {friendTable()}
        </Base>
    )   
}

export default FriendRequests
