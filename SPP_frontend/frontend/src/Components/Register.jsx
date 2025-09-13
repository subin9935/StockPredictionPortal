import React,{useState} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
 

const Register = () => {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState({})
    const [success,setSuccess] =useState(false)
    const [loading,setLoading] = useState(false)

    const handleRegistration = async (e) => {

        e.preventDefault();
        setLoading(true)

        // Make User Data Object
        const UserData = {
            username,email,password
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',UserData)
            console.log('response.data ====>' ,response.data)
            console.log('Registration Success')
            setError({})
            setSuccess(true)
            setLoading(false)
        
        }catch(error){
            console.error('Registration Error:' , error.response.data)
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
                    <h3 className='text-light text-center mb-4'>Create an Account</h3>
                    <form onSubmit={handleRegistration}>
                        <div className='mb-3'>
                            <input type ="text" className='form-control' placeholder='Enter Username' value ={username} onChange ={(e) =>setUsername(e.target.value) }></input>
                            <small>{error.username && <div className='text-danger'>{error.username}</div>}</small>
                        </div>
                        <div className='mb-3'>    
                            <input type ="email" className='form-control' placeholder='Enter Email' value ={email} onChange ={(e) =>setEmail(e.target.value) }></input>
                            <small>{error.email && <div className='text-danger'>{error.email}</div>}</small>
                        </div>    
                        <div className='mb-3'>
                            <input type ="password" className='form-control' placeholder='Enter Password' value ={password} onChange ={(e) => setPassword(e.target.value)}></input>
                            <small>{error.password && <div className='text-danger'>{error.password}</div>}</small>
                        </div>
                           {success && 
                           <div className='alert alert-success'>
                            Registration Successful !!
                            </div>
                           }
                           {loading ? (
                              <button type ="submit" className='btn btn-info d-block mx-auto' disabled><FontAwesomeIcon  icon={faSpinner} spin/> wait ..</button>
                           ) : (
                              <button type ="submit" className='btn btn-info d-block mx-auto'>Register</button>      
                           )}
                            
                        
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register