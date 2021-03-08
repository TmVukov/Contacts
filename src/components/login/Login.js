import React, { useState } from 'react'
import './Login.scss'
import { auth } from '../../utils/firebase'
import { Link, useHistory } from 'react-router-dom'
import Loader from "react-loader-spinner"
import Header from '../header/Header'


export default function LogIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')   
    const history = useHistory() 
    
    
    const handleSubmit = e =>{
        e.preventDefault()        
        
        setLoading(true)
        
        auth.signInWithEmailAndPassword(email, password)
        .then(user=>{
            if(user) history.push('/')            
        })
        .catch(()=>{
            setError('Failed to log in!')
        }) 
        
        sessionStorage.setItem('user', JSON.stringify(email))
    }   
    

    return (
        <div>     
            
            {
                error && loading ? 

                <p>{error} Please refresh the page.</p> :

                loading ?

                <Loader type="Oval" color="#191970" height={80} width={80}/> :                

                <div className='login__container'>
                    <Header>
                        <Link to='/home'>home</Link>
                        <Link to='/signup'>sign up</Link>
                    </Header>
                    
                    <form onSubmit={handleSubmit} className='login__form'>
                    <input onChange={e=>setEmail(e.target.value)} type='email' placeholder='Enter email' required/>
                    <input onChange={e=>setPassword(e.target.value)} type='password' placeholder='Enter password' required/>                
                    <button>Submit</button>
                </form>

                </div>
            }
            
        </div>
    )
}
