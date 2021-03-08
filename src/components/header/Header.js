import React from 'react'
import './Header.scss'

export default function Header({children}) {
    return (
        <div className='container'>
            {children}
        </div>
    )
}
