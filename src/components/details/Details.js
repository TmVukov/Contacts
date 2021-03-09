import React, { useState, useEffect, useContext } from 'react'
import './Details.scss'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import { StateContext } from '../../utils/stateProvider'
import axios from 'axios'


export default function Details() {
    const [error, setError] = useState('')
    const { contacts, setContacts } = useContext(StateContext)   
    const sessionId = JSON.parse(sessionStorage.getItem('id')) 
    

    useEffect(() => {
       const detail =  axios.get(
            `https://contacts-d9f0b-default-rtdb.europe-west1.firebasedatabase.app/contacts/${sessionId}.json`)
        .then(resp=>{            
            console.log(resp.data)                   
            setContacts([resp.data])            
        })
        .catch(err=>setError(err))
        
        return detail
        
    }, [setContacts, sessionId])

   
    
    const deleteContact = () =>{       
        axios.delete(
            `https://contacts-d9f0b-default-rtdb.europe-west1.firebasedatabase.app/contacts/${sessionId}.json`)
        .then(resp=>{
            console.log(resp)
            setContacts([])
        })
    }

    return (
        <div className='details__container'>
            <Header>
                <Link to='/contacts' className='details__link home'>contacts</Link>
                <Link to='/favorites' className='details__link favorites'>favorites</Link>
                <Link to='/update' className='details__link update'>update</Link>
            </Header>                                      
                
            {
                error ? <p>{error}</p> :
            
                sessionId && contacts.map((contact,i)=>                 
                        <section key={i}>
                            <table className='details__table'>
                            <tbody>
                                    <tr><th>Contact Details</th></tr>
                                    <tr><td>Name: {contact.name}</td></tr>   
                                    <tr><td>Surname: {contact.surname}</td></tr>   
                                    <tr><td>Email: {contact.email}</td></tr>   
                                    <tr><td>Mob: {contact.mobile}</td></tr>   
                                    <tr><td>Phone: {contact.phone}</td></tr>                           
                                    <tr><td>Birthdate: {contact.birthDate}</td></tr>                           
                            </tbody>                            
                            </table>
                        </section>                
                    )
            }

            <button onClick={deleteContact}>Delete Contact</button>   
          
        </div>
    )
}
