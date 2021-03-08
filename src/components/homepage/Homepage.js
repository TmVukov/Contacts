import React from 'react'
import './Homepage.scss'
import { Link } from 'react-router-dom'
import Header from '../header/Header'


export default function Homepage() {    

    return (
        <section>

            <Header className='home__header'>
                <div className='home__logo'>
                    My Contacts
                </div>


                <div className='home__links'>
                    <Link to='/signup' >sign up</Link>
                    <Link to='/login'>log in</Link>
                </div>                           
            </Header>
           
        </section>
    )
}


