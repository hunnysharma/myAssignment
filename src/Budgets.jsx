import React from 'react'
import Instance from './Progressbar';
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';


const Budgets = () => {

    return (
        <>
            <Navbar></Navbar>
            
                    <Instance
                        no='3'
                    />

            <section id='header' className='d-flex'>

                <div className='container-fluid' >
                    <div className='row' >
                        <div className='col-10 mx-auto'>
                            <div className='row' >
                                <div className='col-md-8 order-2 order-lg-1  justify-content-center flex-column' >
                                    <h1>Just a few more details before you live</h1>
                                    <h5 className='my-3'>Fill in the form below, You will be charged at the end of the day</h5>
                                    <form>
                                        <div className="row">
                                            <div className="col-5">
                                                <input type="text" className="form-control" placeholder="CARD NUMBER" />
                                            </div>
                                            <div className="col-3 ">
                                                <input type='date' className="form-control" placeholder="EXPIRY DATE" />
                                            </div>
                                            <div className="col-2">
                                                <input type="text" className="form-control" placeholder="CVV" />
                                            </div>
                                        </div>
                                    </form>
                                    <h5 className='my-4'>How would you like to recieve the leads</h5>
                                    <form>
                                        <div className="row">
                                            <div className="col-2">
                                                <input type="text" className="form-control" placeholder="EMAIL ME" />
                                            </div>
                                            <div className="col-4">
                                                <input type="text" className="form-control" placeholder="CONNECT MY CRM" />
                                            </div>

                                        </div>
                                    </form>

                                </div>
                                <div className='col-lg-4 order-1 justify-content-center' >

                                    <div className="card  text-white  mb-4">
                                        <div className="card-body  mycard">
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
                            <div className='row my-5' >
                                <div className='col-lg-10 order-1 justify-content-center' >
                                    <NavLink to="./Target"><button type="button" className="btn2 info1 ">⬅Prev</button></NavLink>
                                </div>
                                <div className='col-lg-2 order-1 justify-content-center' >

                                    <NavLink to="./Last"><button type="button" className="btn2 info1 ">Next➡</button></NavLink>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Budgets;
