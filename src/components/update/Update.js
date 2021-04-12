import React, { useState, useEffect, useContext } from 'react'
import './Update.scss'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import { StateContext } from '../../utils/stateProvider'
import { axiosInstance } from '../../utils/axios'
import Main from '../main/Main'
import Footer from '../footer/Footer'

export default function Update() {
    const [error, setError] = useState('') 
    const [updated, setUpdated] = useState(false)    
    const sessionId = JSON.parse(sessionStorage.getItem('id')) 

    const {        
        contacts, setContacts,
        name, setName, 
        surname, setSurname, 
        email, setEmail, 
        mobile, setMobile, 
        phone, setPhone 
    } = useContext(StateContext)    
    

    const mobileReg = /^[0][9][1-9]\s\d{3,4}\s\d{3}$/
    const isMobValid = mobile?.match(mobileReg) || mobile === undefined 

    const phoneReg = /^[0][1]\s\d{3,4}\s\d{3}|[0][2-5][0-9]\s\d{3,4}\s\d{3}$/
    const isPhoneValid = phone?.match(phoneReg) || phone === undefined   
    console.log(mobile)
    
    useEffect(() => {
       const singleContact = axiosInstance.get(
            `contacts/${sessionId}.json`)
        .then(resp=>{            
            console.log(resp.data)         
            setContacts([resp.data])
        })
        .catch(err=>setError(err))

        return singleContact

    }, [setContacts, sessionId])

    

    const filterObject = (obj) =>{
        const newObj = {}

        for(let key in obj){           
            if(obj[key] !== '' && obj[key] !== undefined){                
                newObj[key] = obj[key]
            }                     
        } 
        return newObj       
    }   


    const newContactData = { name, surname, email, mobile, phone }
    

    const updateContact = e =>{
        e.preventDefault()         

        axiosInstance.patch(`contacts/${sessionId}.json`, filterObject(newContactData))
            .then(res=>{
                console.log(res)
                setUpdated(true)

                setTimeout(() => {
                    setUpdated(false)        
                }, 1500); 
            }) 
            .catch(err=>setError(err))        
    } 
    //console.log(contacts)
    
    return (
        <div className='update__container'>

            <Header>
                <Link to={`/details/${sessionId}`}>details</Link>
            </Header>

            <Main>

                { updated && <div className='update__message success'>Contact is updated!</div>}

                { error && <div className='update__message error'>{error}</div>}

                { 
                    mobile && !isMobValid ? 
                    <div className='update__message error'>Mobile format is invalid!</div> : '' 
                }

                { 
                    phone && !isPhoneValid ? 
                    <div className='update__messageerror'>Phone format is invalid!</div> : '' 
                }

                {
                    !contacts[0] ? <p>Sorry, your contact is deleted.</p>

                    : 

                    contacts.map((contact,i)=>                             
                    <form onSubmit={updateContact} key={i} className='update__form'>

                        <input 
                            onChange={e=>setName(e.target.value)} 
                            defaultValue={contact.name} 
                            placeholder='Update name'
                            type='text'
                        />

                        <input 
                            onChange={e=>setSurname(e.target.value)} 
                            defaultValue={contact.surname} 
                            placeholder='Update surname'
                            type='text'
                        />

                        <input 
                            onChange={e=>setEmail(e.target.value)} 
                            defaultValue={contact.email} 
                            placeholder='update email'
                            type='email'
                        />

                        <div className='subform__mobile'>
                            <label>Mobile format: 09x xxx(x) xxx</label>
                            <input 
                                onChange={e=>setMobile(e.target.value)}
                                defaultValue={contact.mobile}                            
                                type='tel' 
                                placeholder='Enter mobile'
                                maxLength='12'  
                                
                            />
                        </div>

                        <div className='subform__phone'>
                                <label>Phone format: 0(xx) xxx(x) xxx</label>
                                <input 
                                    onChange={e=>setPhone(e.target.value)}
                                    defaultValue={contact.phone}                                     
                                    type='tel' 
                                    placeholder='Enter phone' 
                                    maxLength='12'                                    
                                />
                        </div>

                        <button disabled={!isMobValid || !isPhoneValid ? true : false}>Update contact</button>                  

                    </form>                               
                    )
                }

            </Main>

            <Footer/>

        </div>
    )
}
