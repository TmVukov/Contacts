import React, { useState, createContext } from 'react'

export const StateContext = createContext()

export default function StateProvider({children}) {
    const [contacts, setContacts] = useState([])    
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [mobile, setMobile] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [currentPage, setCurrentPage] = useState(1) 
    const [contactsPerPage, setContactsPerPage] = useState('10')     
    

    const state={
        contacts, setContacts,       
        name, setName,
        surname, setSurname,
        mobile, setMobile,
        phone, setPhone,
        email, setEmail,
        username, setUsername,
        currentPage, setCurrentPage,
        contactsPerPage, setContactsPerPage            
    }

    return (
        <StateContext.Provider value={state}>
            {children}
        </StateContext.Provider>
    )
}

