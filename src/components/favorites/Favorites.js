import React, { useState, useEffect } from 'react'
import './Favorites.scss'
import Header from '../header/Header'
import { extractDataFromObject } from '../../utils/utils'
import { Link } from 'react-router-dom'
import { getId } from '../../utils/utils'
import axios from 'axios'

export default function Favorites() {
    const [favorites, setFavorites] = useState([])
    
    
    useEffect(() => { 
       const favoriteContacts =  axios.get(
            'https://contacts-d9f0b-default-rtdb.europe-west1.firebasedatabase.app/contacts.json')
        .then(resp=>{            
            const contacts = extractDataFromObject(resp)
            const favorites = contacts.filter(e=>e.favorite === true)
            setFavorites(favorites)
            
        })
        .catch(err=>console.log(err))

        return favoriteContacts

    }, [setFavorites])     
    


    return (
        <div className='favorites__container'>

            <Header>
                <Link to='/contacts' className='favorites__link home'>contacts</Link>
            </Header>


            <table className='favorites__table'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Email</th>                        
                    </tr>
                    {                  
                       favorites.map((contact,i)=>                                
                                <tr key={i}>
                                     <td>
                                        <Link to={`/details/${contact.id}`} onClick={()=>getId(contact.id)}>
                                            {contact.name}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/details/${contact.id}`} onClick={()=>getId(contact.id)}>
                                            {contact.surname}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/details/${contact.id}`} onClick={()=>getId(contact.id)}>
                                            {contact.email}
                                        </Link>
                                    </td>                                      
                                </tr>                                                                             
                            )                    
                    }

                </tbody>   
            </table>   

        </div>
    )
}