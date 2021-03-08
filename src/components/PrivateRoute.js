import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { useHistory } from 'react-router-dom'

export default function PrivateRoute({component: Component, ...rest}) {
   
    const history = useHistory() 
    
    useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged(user=>{            
            if(user) history.push('/')             
            else history.push('/home')            
         }) 
         
        return unsubscribe
      }, [history])      
 
        
    return (
        <Route
            {...rest}
            render={props => auth.currentUser && <Component {...props}/>}
        />           
    )
}
