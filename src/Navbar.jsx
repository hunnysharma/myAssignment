import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const styleSpan = {
        fontSize : 30,
        fontFamily: 'Comic Sans MS',
        color:"#38a4fc"
     }
    return (
        <>
        
            <div className='container-fluid nav-bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <NavLink to="/"><img height="35px"  src="https://www.brandcrowd.com/gallery/brands/pictures/picture1495010754862.png" alt='myimg'/>
                        </NavLink>
                            <NavLink className="mynav navbar-brand" to="/">
                                <h4 style={styleSpan}>seeda</h4>
                                </NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink   className="mynav nav-link" to="/">Feature</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink  className="mynav nav-link" to="/">About</NavLink>
                                    </li>
                                    <li className=" nav-item">
                                        <NavLink  className="mynav nav-link" to="/">Roadmap</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink  className="mynav nav-link" to="/">Pricing</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                    <button type="button" className="btn1 info1 ">Sign Up</button>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Navbar
