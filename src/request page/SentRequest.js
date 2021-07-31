import React, { useState } from 'react'
import Base from '../core/Base'
import {  pendingRequests } from './helper'

const SentRequests = () => {     
    const [usersList, setusersList] = useState([])      
    pendingRequests().then((data)=>{
        setusersList(data)
    }).catch(()=>{
        console.log('No friends')
    })
    
    const usersTable = ()=>{
        return <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
        <table className="table ">
                <thead>
                    <tr>                
                    <th scope="col">Name</th>                    
                    </tr>
                </thead>
                <tbody>
                {usersList.map(function(user, i){
                    return <tr key={i}>                
                        <td>{user.name}</td>                        
                        {/* <td><button 
                            onClick={()=>{
                                sendRequest(user._id)
                            }}
                            type="button" className="btn btn-info">Add</button>
                        </td> */}
                    </tr>                    
                })}                        
                </tbody>
            </table>
        </div>
      </div>          
    } 
    return(
        <Base title='Sign Up page' description='A page for user signup!'>
            {usersTable()}
        </Base>
    )   
}

export default SentRequests
