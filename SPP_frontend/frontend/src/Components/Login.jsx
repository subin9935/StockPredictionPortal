import React,{useContext, useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom' // For Navigation
import { AuthContext } from '../Authprovider' 

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState({})
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const {setIsLoggedIn} = useContext(AuthContext)

    const handleLogin = async (e) => {

        e.preventDefault();
        setLoading(true)

        // Make User Data Object
        const UserData = {
            username,password
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/token/',UserData)
            localStorage.setItem('accessToken',response.data.access)
            localStorage.setItem('refreshToken',response.data.refresh)

            console.log('response.data =>' ,response.data)
            console.log('Login Success')
            setError({})
            setLoading(false)
            setIsLoggedIn(true)
            navigate("/dashboard")
        
        }catch(error){
            console.error('Login Failed:' , error.response.data)
            setError(error.response.data)

        }finally{
            setLoading(false)
        }

        

    }
  return (
    <>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 bg-light-dark p-5 rounded'>
                    <h3 className='text-light text-center mb-4'>Login to our Portal</h3>
                    <form onSubmit={handleLogin}>
                        <div className='mb-3'>
                            <input type ="text" className='form-control' placeholder='Enter Username' value ={username} onChange ={(e) =>setUsername(e.target.value) }></input>
                            <small>{error.username && <div className='text-danger'>{error.username}</div>}</small>
                        </div>
                        
                        <div className='mb-3'>
                            <input type ="password" className='form-control' placeholder='Enter Password' value ={password} onChange ={(e) => setPassword(e.target.value)}></input>
                            <small>{error.password && <div className='text-danger'>{error.password}</div>}</small>
                        </div>
                          
                           {loading ? (
                              <button type ="submit" className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon  icon={faSpinner} spin/> Logging In</button>
                           ) : (
                              <button type ="submit" className='btn btn-info d-block mx-auto'>Log In</button>      
                           )}
                            
                        
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login