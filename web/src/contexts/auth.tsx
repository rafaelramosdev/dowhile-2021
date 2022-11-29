import { createContext, ReactNode, useEffect, useState } from 'react'

import { api } from '../services/api'

type User = {
  id: string
  name: string
  login: string
  avatar_url: string
}

type AuthContextData = {
  user: User | null
  signInUrl: string
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextData) 

type AuthProvider = {
  children: ReactNode
}

type AuthResponse = {
  token: string
  user: {
    id: string
    name: string
    login: string
    avatar_url: string
  }
}

export function AuthProvider(props: AuthProvider) {
  const [ user, setUser ] = useState<User | null>(null)

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=`

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode,
    })

    const { token, user } = response.data

    localStorage.setItem('@dowhile:token', token)

    api.defaults.headers.common.authorization = `Bearer ${token}` // every request from this line goes with the authentication token

    setUser(user)
  }

  function signOut() {
    setUser(null)
    localStorage.removeItem('@dowhile:token')
  }

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token')

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}` // every request from this line goes with the authentication token

      api.get<User>('user/profile').then(response => {
        setUser(response.data)
      })
    }
  }, [])

  useEffect(() => {
    const url = window.location.href

    const hasGithubCode = url.includes('?code=')

    if (hasGithubCode) {
      const [ urlWithoutCode, githubCode ] = url.split('?code=')

      window.history.pushState({}, '', urlWithoutCode) // clean the url to not show the code

      signIn(githubCode)
    }
  }, [])
  
  return (
    <AuthContext.Provider value={{ signInUrl, signOut, user }}>
      {props.children}
    </AuthContext.Provider>
  )
}