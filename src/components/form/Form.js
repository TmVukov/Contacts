import React, { useState, useContext, useRef } from 'react'
import './Form.scss'
import { StateContext } from '../../utils/stateProvider'
import { axiosInstance } from '../../utils/axios'
import SubForm from '../subform/SubForm'

export default function Form() {
    
    const [date, setDate] = useState('')    
    const [open, setOpen] = useState(false)
    const [added, setAdded] = useState(false) 

    const formRef = useRef()

    const { 
        name, setName, 
        surname, setSurname, 
        mobile, phone,
        email, favorite   
    } = useContext(StateContext) 
    

    //const emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    const mobileReg = /^[0][9][1-9]\s\d{3,4}\s\d{3}$/
    const isMobValid = mobile && mobile.match(mobileReg)

    const phoneReg = /^[0][1]\s\d{3,4}\s\d{3}|[0][2-5][0-9]\s\d{3,4}\s\d{3}$/
    const isPhoneValid = phone && phone.match(phoneReg)


    const formatDate = (date) =>{
        const formatted = date.split('-')
        return formatted.reverse().join('/')
    }      
    

    const addContact = e =>{
        e.preventDefault()

        const contact = { 
            name, surname, email, 
            mobile, phone, 
            birthDate: formatDate(date),
            favorite 
        }        

        axiosInstance.post('contacts.json/', contact)
        .then(res =>{
            console.log(res)
            setAdded(true)

            setTimeout(() => {
                setAdded(false)        
            }, 1500);
            
        })        
        .catch(err=>console.log(err))
        
        formRef.current.reset() 
    }
    


    return (
        <div className='form__container'>
            { added ? <p>Contact is saved!</p> : ''}
            { mobile && !isMobValid ? <p>Mobile format is invalid!</p> : '' }
            { phone && !isPhoneValid ? <p>Phone format is invalid!</p> : '' }

            <form onSubmit={addContact} ref={formRef} className='form__info'>

                <input 
                    onChange={e=>setName(e.target.value)} 
                    type='text' 
                    placeholder='Enter name'
                    maxLength='100' 
                    required
                /> 
                
                
                <input 
                    onChange={e=>setSurname(e.target.value)} 
                    type='text' 
                    placeholder='Enter surname'
                    maxLength='300' 
                    required
                /> 

               <div className='form__date'>
                    <label>Select birthdate</label>
                    <input onChange={e=>setDate(e.target.value)} type="date"/> 
               </div> 

              

                <button onClick={()=>setOpen(!open)}>Enter contacts</button>

                { open && <SubForm/> }                           
                              
                <button disabled={!isMobValid || !isPhoneValid ? true : false}>Add your contact</button>
            </form>
        </div>
    )
}





