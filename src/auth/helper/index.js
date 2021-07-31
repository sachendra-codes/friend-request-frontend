import { API } from '../../backend'
//API means http://localhost:4000/api/

export const signup = (user) => {
  console.log(user)
  return fetch(`${API}/register`, {    
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.log(err)
    })
}

export const login = (user) => {
  console.log(user)
  return fetch(`${API}/login`, {    
    method: 'POST',
    headers: {
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      console.log(err)
    })
}

export const signout = (next) => {
  if (typeof window !== 'undefined') {    
    localStorage.removeItem('jwt')
    next()
    return fetch(`${API}/signout`, {
      method: 'GET',
    })
      .then((response) => console.log('Signout Successfully'))
      .catch((err) => console.log(err))
  }
}

export const authenticate = (data, next)=>{
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data))
    next()
  }
}

export const isAuthenticted = () => {
  if (typeof window == 'undefined') {
    return false
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'))
  } else {
    return false
  }
}