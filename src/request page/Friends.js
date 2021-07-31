import React, { useState } from 'react'
import Base from '../core/Base'
import { addFriend, friends, rejectRequest, removeFriend } from './helper'

const Friends = () => {     
    const [friendsList, setfriendsList] = useState([])      
    friends().then((data)=>{
        setfriendsList(data)
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
                    <th scope="col">Remove</th>                    
                    </tr>
                </thead>
                <tbody>
                {friendsList.map(function(friend, i){
                    return <tr key={i}>                
                    <td>{friend.name}</td>
                        {/* <td><button 
                        // onClick={()=>{
                        //     addFriend(friend._id)
                        // }} 
                        type="button" className="btn btn-success">Accept</button></td> */}
                        <td><button 
                        onClick={()=>{
                            removeFriend(friend._id)
                        }}
                         type="button" className="btn btn-danger">Remove</button></td>
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

export default Friends
