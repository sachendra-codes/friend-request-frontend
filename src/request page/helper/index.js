import { API } from '../../backend'
export const friends = ()=>{    
    const user = localStorage.getItem('jwt')? JSON.parse(localStorage.getItem('jwt')).user : [];
    return fetch(`${API}/friends/${user._id}`,{
        method : 'GET',        
    })
    .then((response)=>{
        return response.json()
    })
    .catch((err)=>{
        console.log(err)
    })
}

export const allUsers = () =>{    
    return fetch(`${API}/allUsers`,{
        method : 'GET',        
    }).then((response)=>{
        return response.json()
    }).catch((err)=>{
        console.log(err)
    })
}

export const suggestedFriend = () =>{
    const user = localStorage.getItem('jwt')? JSON.parse(localStorage.getItem('jwt')).user : [];
    return fetch(`${API}/suggestions/${user._id}`, {
        method : "GET",
    }).then(response=>{
        return response.json()
    }).catch(err =>{
        console.log(err)
    })
}


export const getUser = (userId)=>{
    return fetch(`${API}/user/${userId}`, {
        method : "GET",
    }).then(response=>{
        return response.json();
    }).catch(err=>{
        console.log(err)
    })
}

export const addFriend = (friendId) =>{
    const user = localStorage.getItem('jwt')? JSON.parse(localStorage.getItem('jwt')).user : [];
    return fetch(`${API}/accept/${user._id}/${friendId}`,{
        method : 'POST',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
        },
    }).then((response)=>{
        return response.json()
    }).catch((err)=>{
        console.log(err)
    })
}
export const sendRequest = (user2id) =>{
    const user = localStorage.getItem('jwt')? JSON.parse(localStorage.getItem('jwt')).user : [];
    return fetch(`${API}/add/${user._id}/${user2id}`,{
        method : 'POST',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
        },
    }).then((response)=>{
        return response.json()
    }).catch((err)=>{
        console.log(err)
    })
}

export const pendingRequests = () => {
    const {user} = localStorage.getItem('jwt')? JSON.parse(localStorage.getItem('jwt')):{user:{}};
    return fetch(`${API}/sentRequests/${user._id}`, {
        method : 'GET'
    }).then((response)=>{
        return response.json()
    }).catch((err)=>{
        console.log(err)
    })
}

export const friendRequests = () => {
    const user = localStorage.getItem('jwt')? JSON.parse(localStorage.getItem('jwt')).user : [];
    return fetch(`${API}/friendRequests/${user._id}`, {
        method : 'GET'
    }).then((response)=>{
        return response.json()
    }).catch((err)=>{
        console.log(err)
    })
}

export const rejectRequest = (friendId) =>{
    const user = localStorage.getItem('jwt')? JSON.parse(localStorage.getItem('jwt')).user : [];
    return fetch(`${API}/reject/${user._id}/${friendId}`,{
        method : 'POST',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
        },
    }).then((response)=>{
        return response.json()
    }).catch((err)=>{
        console.log(err)
    })
}

export const removeFriend = (friendId) =>{
    const user = localStorage.getItem('jwt')? JSON.parse(localStorage.getItem('jwt')).user : [];
    return fetch(`${API}/remove/${user._id}/${friendId}`,{
        method : 'POST',
        headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
        },
    }).then((response)=>{
        return response.json()
    }).catch((err)=>{
        console.log(err)
    })
}

