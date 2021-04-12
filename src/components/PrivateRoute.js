import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { StateContext } from '../utils/stateProvider'

export default function PrivateRoute({component: Component, ...rest}) {    
    
    const { currentUser } = useContext(StateContext)      
            
    return (
        <Route
            {...rest}
            render={props => currentUser ? <Component {...props}/> : <Redirect to='/signup'/>}
        />           
    )
}
