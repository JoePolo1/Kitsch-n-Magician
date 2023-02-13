import { useState, useEffect } from 'react';


export default function useToken() {


  const getToken = () => {
    const tokenString = localStorage.getItem('token') ;
    const userToken = JSON.parse(tokenString);

    return userToken;
  }

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {if (typeof window !== 'undefined') {localStorage.setItem('token', JSON.stringify(userToken))
  setToken(userToken.token)
  }};

  const deleteToken = () => {localStorage.removeItem('token')}

  return {
    setToken: saveToken,
    getToken,
    deleteToken
  }

}
