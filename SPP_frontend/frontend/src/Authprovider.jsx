import {useState,useContext, createContext} from 'react'

const AuthContext = createContext();
const Authprovider = ({ children }) => {

    const [isLoggedIn,setIsLoggedIn] = useState(
       !! localStorage.getItem('accessToken')
       
    )

  return (
   <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
   </AuthContext.Provider>
  )
}

export default Authprovider
export {AuthContext}