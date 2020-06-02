import history from './history';
import React, { 
	useState, 
	createContext,
	useCallback,
	useEffect
} from 'react';

import localStorage, { set, get } from "local-storage";

export default class Auth {
//   auth0 = new auth0.WebAuth({
//     domain: 'webapp1.auth0.com',
//     clientID: '',
//     redirectUri: 'http://localhost:3000/callback',
//     responseType: 'token id_token',
//     scope: 'openid profile email'
//   })

  fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) // fake async
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) // fake async
    }
  }

  userProfile = {}

  login = () => {
    //   this.auth0.authorize()
      this.fakeAuth.authenticate()
  }

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if(authResult) {
        localStorage.setItem('access_token', authResult.accessToken)
        localStorage.setItem('id_token', authResult.idToken)

        let expiresAt = JSON.stringify((authResult.expiresIn * 1000 + new Date().getTime()))
        localStorage.setItem('expiresAt', expiresAt)

        this.getProfile();
        setTimeout(() => { history.replace('/authcheck') }, 600);
      } else {
        console.log(err)
      }
    })
  }

  getAccessToken = () => {
    if(localStorage.getItem('access_token')) {
      const accessToken = localStorage.getItem('access_token')
      return accessToken
    } else {
      return null
    }
  }


  getProfile = () => {
    let accessToken = this.getAccessToken()
    if(accessToken) {
      this.auth0.client.userInfo(accessToken, (err, profile) => {
          if(profile) {
            this.userProfile = { profile }
          }
      } )
    }
  }


  logout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expiresAt')
    setTimeout(() => { history.replace('/authcheck') }, 200);
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'))
    return new Date().getTime() < expiresAt
  }

}