import React, { useEffect, useContext } from 'react'
import './Dashboard.scss'
import { StateContext } from '../../utils/stateProvider'
import { extractDataFromObject } from '../../utils/utils'
import { auth } from '../../utils/firebase'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import Header from '../header/Header'
import Form from '../form/Form'
import Main from '../main/Main'
import Footer from '../footer/Footer'

export default function Dashboard() {  
    
    const { username, setUsername } = useContext(StateContext) 

    const sessionEmail = JSON.parse(sessionStorage.getItem('user'))
    
    const history = useHistory() 
    
    const handleLogout = () => auth.signOut().then(()=>history.push('/home'))


    useEffect(() => {        

        const fetchedUsers = axios.get(
            'https://contacts-d9f0b-default-rtdb.europe-west1.firebasedatabase.app/users.json')
        .then(resp=>{
            const usersArr = extractDataFromObject(resp)
            const user = usersArr.filter(e=>e.email === sessionEmail)
            setUsername(user[0].username) 
        })
        .catch(err=>console.log(err))

        return fetchedUsers

    }, [setUsername, sessionEmail])

    

    return (
        <section className='dashboard__container'>

            <Header>
                <p>Welcome {username}!</p> 
                
                <Link to='/contacts' className='dashboard__link-contacts'>contacts</Link>                

                <button onClick={handleLogout} className='dashboard__btn-logout'>log out</button>                               
            </Header>

            <Main>
                <Form/>
            </Main>

            <Footer/>
            
        </section>
    )
}
