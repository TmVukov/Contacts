import React, { useState, useContext } from 'react'
import './Signup.scss'
import { StateContext } from '../../utils/stateProvider'
import { auth } from '../../utils/firebase'
import { Link, useHistory } from 'react-router-dom'
import { axiosInstance } from '../../utils/axios'
import Loader from "react-loader-spinner"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { IoMdContact } from 'react-icons/io'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')   
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)    
    const history = useHistory()  

    const { username, setUsername } = useContext(StateContext) 
    
    
    const handleSubmit =  e =>{
        e.preventDefault()
        
        const passwordReg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[$#!+-]).{6,}$/

        setLoading(true)

        if(!password.match(passwordReg)){
            return setError(
                'Password should contain: at least 6 characters, 1 number and 1 special character: +, -, !, #, $.')
        }             
        

        auth.createUserWithEmailAndPassword(email, password)
        .then(user=>{
            if(user && !loading) history.push('/')                      
        })
        .catch(err=>setError(err.message))

        
        sessionStorage.setItem('user', JSON.stringify(email))
        
        const user = {email, username}        

        axiosInstance.post('users.json/', user)
        .then(res=>console.log(res))        
        .catch(err=>console.log(err))
            
    } 

    return (
        <div className='signup__container'>

            <Header>
                <Link to='/home'><IoMdContact className='home__logo'/></Link>
                <Link to='/login'>log in</Link>
            </Header>
           
           <main>

            {
                    error && loading ? 

                    <>
                        <p>{error}</p>
                        <p>Please refresh the page.</p>
                    </>  :

                    loading ?

                    <Loader className='loader' type="Oval" color="#C7E2F7" height={80} width={80}/> :               
                                              
            
                    <form onSubmit={handleSubmit} className='signup__form'> 

                        <input 
                            onChange={e=>setUsername(e.target.value)} 
                            type='text' 
                            placeholder='Enter username' 
                            
                        />                     

                        <input 
                            onChange={e=>setEmail(e.target.value)} 
                            type='email' 
                            placeholder='Enter email' 
                            required
                        />                        

                        <input 
                            onChange={e=>setPassword(e.target.value)} 
                            type='password' 
                            placeholder='Enter password' 
                            required
                        />               
                                        
                        <button>Submit</button>
                    </form>                       
                    
                }

           </main>
           
           <Footer/>
            
        </div>
    )
}
