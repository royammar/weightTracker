import React from 'react'
import { NavLink} from 'react-router-dom'

export default function navBar() {
    return (
        <div className="nav-bar container  flex space-between">
            <NavLink activeClassName="selected"  className="home" to="/weightTracker" exact>Home</NavLink>
            <NavLink activeClassName="selected"  className="history" to="/weightTracker/history" exact>History</NavLink> 
            <NavLink activeClassName="selected"  className="history" to="/weightTracker/months" exact> Months</NavLink> 
            
        </div>
    )
}
