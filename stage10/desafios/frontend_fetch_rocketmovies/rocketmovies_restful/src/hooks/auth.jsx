import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  function signIn({ email, password }) {
    const user = { email, password }
    fetch(api.baseURL + '/sessions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(user)
    })
    .then((resolve) => resolve.json())
    .then((data) => {
      if (data.message) {
        alert(data.message)
      } else {
        alert('Usuário autenticado.')
      }
      console.log(data)
      const { user, token } = data;
      if (user && token) {
        localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
        localStorage.setItem('@rocketmovies:token', token)
        setData(data)
      }
    })
    .catch((error) => {
      console.log(error)
      if (error.message) {
        alert(error.message)
      } else {
        alert('Não foi possível acessar.')
      }
    })
  }

  function signUp({ name, email, password }) {
    const user = { name, email, password }
    fetch(api.baseURL + '/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(user)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      alert(data.message)
    })
    .catch((error) => {
      console.log(error)
      if (error.message) {
        alert(error.message)
      } else {
        alert('Não foi possível logar.')
      }
    })
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:token')
    localStorage.removeItem('@rocketmovies:user')
    setData({})
  }

  function updateProfile({ user, avatarFile }) {
    if (avatarFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append('avatar', avatarFile)

      console.log('File Form', fileUploadForm)

      fetch(`${api.baseURL}/users/avatar`, {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'Content-type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('@rocketmovies:token')}`
        },
        body: fileUploadForm      
      })
      .then(response => response.json())
      .then(resolve => console.log(resolve))
      .catch(error => console.error(error))      
    }

    fetch(`${api.baseURL}/users`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${localStorage.getItem('@rocketmovies:token')}`
      },
      body: JSON.stringify(user)
    })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
      setData({ user, token: data.token})
      alert(data.message)
    })
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketmovies:token')
    const user = localStorage.getItem('@rocketmovies:user')
    
    if (!token || !user) {
      return;
    }

    if (token && user) {
      setData({ token, user: JSON.parse(user)})
    }
  }, [])

  return(
    <AuthContext.Provider value={{ signIn, signUp, user: data.user, signOut, updateProfile }}>
      { children }
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context;
}

export { AuthProvider, useAuth }