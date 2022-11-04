import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {

    return (
        <header >
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#F8C471", fontWeight:"bold"}} > 
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Employee Management FSD</NavLink>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                          
                        </ul>   
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
