import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';



const Last = () => {
    return (
        <>
            <Navbar></Navbar>

            <section id='header' className='d-flex'>
                
                <div className='container-fluid' >
                    <div className='row' >
                        <div className='col-10 mx-auto'>
                            <div className='row' >
                                <div className='col-md-6 order-2 order-lg-1  justify-content-center flex-column' >
                                    <h1>Congratulations!</h1>
                                    <h5 className='my-3'>Fill in the form below, You will be charged at the end of the day
                                    Fill in the form below, You will be charged at the end of the day
                                    Fill in the form below, You will be charged at the end of the day
                                    Fill in the form below, You will be charged at the end of the day</h5><br/><br/><br/><br/>
                                    <NavLink to="./Dashboard"><button type="button" className="btn2 info1 ">Go To Dashboard &nbsp;&nbsp;➡</button></NavLink>
                                </div>
                                <div className='col-lg-2 order-1 justify-content-center' ></div>
                                <div className='col-lg-4 order-1 justify-content-center' >
                                     <div className="card border-0 text-white  mb-4">
                                        <div className="card-body border-0 mycard1">
                                            <div className="mycard-item">
                                                <h5 className="card-text">Leads per day  </h5>
                                                <div> <h4>10-20</h4></div>
                                            </div>
                                            <div className="mycard-item">
                                                <h5 className="card-text">Daily Budget </h5>
                                                <div><h4>$50</h4></div>
                                            </div>
                                            <div className="mycard-item">
                                                <h5 className="card-text">cost per day </h5>
                                                <div><h4>$10-$20</h4></div>
                                            </div>
                                            <div className="mycard-item">
                                                <h5 className="card-text">start date  </h5>
                                                <div >22nd June 2019</div>
                                            </div>
                                            <div className="mycard-item">
                                                <h5 className="card-text">end date </h5>
                                                <div >No end date</div>
                                            </div>

                                        </div>
                                    </div>   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Last;
