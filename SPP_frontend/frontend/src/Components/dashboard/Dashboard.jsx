import React , {useEffect, userEffect} from 'react'
import axiosInstance from '../../axiosinstance'

const Dashboard = () => {

    useEffect(() => {

        const fetchProtectedData = async()  => {
            try {
                 const response = await axiosInstance.get('/protected-view/')  
                 console.log('Sucess:' ,response.data)
            }catch{
                console.error('Error Fetching Data:',error)
            }
            
        }
        fetchProtectedData();
    },[])
  return (
    <div className='text-light'>Dashboard</div>
  )
}

export default Dashboard