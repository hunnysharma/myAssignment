import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
    const styleSpan = {
        fontSize : 30,
        fontFamily: 'Comic Sans MS',
        color:"#38a4fc"
     }
     
    return (
        <>
            <div className='container-fluid nav-bg'>
                <div className='row'>
                    <div className='col-12 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <NavLink to="/"><img height="35px"  src="https://www.brandcrowd.com/gallery/brands/pictures/picture1495010754862.png" alt='myimg'/>
                        </NavLink>
                            <NavLink className="mynav navbar-brand" to="/"><h4 style={styleSpan}>seeda</h4></NavLink>
                            
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="style1">
                               <h2>XYZ PVT LTD </h2> 
                            </div>
                            
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <img height="45px" src="https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png" alt='myimg'/>
                                        
                                    </li>
                                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                    <li className="nav-item">
                                    <button type="button" className="btn1 info1 ">Log Out</button>
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

export default Navbar2
