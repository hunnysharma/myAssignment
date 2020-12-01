import React from 'react'
import Instance from './Progressbar';
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';
const Campaign = () => {
    return (
        <>
        <Navbar></Navbar>
          <Instance
             no = '1'
         />
            <section id='header' className='d-flex'>
                <div className='container-fluid' >
                    <div className='row' >
                        <div className='col-10 mx-auto'>
                            <div className='row' >
                                <div className='col-md-6 order-2 order-lg-1  justify-content-center flex-column' >
                                    <h1>Lets talk about your campaign</h1>
                                    <h5>Fill in the form below</h5>
                                    <form>
                                        <div className="form-group my-3">

                                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="CAMPAIGN NAME" />

                                        </div>
                                        <div className="form-group my-3">

                                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="CAMPAIGN START DATE" />
                                        </div>
                                        <div class="form-group my-3">

                                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="CAMPAIGN END DATE" />
                                        </div>
                                        <div class="form-group my-3">

                                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="ENTER 5 POTENTIAL CLIENTS(NAME OR WEBSITES)" />
                                        </div>
                                       
                                    </form>
                                </div>
                                <div className='col-lg-4 order-1 justify-content-center' >

                                </div>
                            </div>
                            <div className='row my-5' >
                                    <div className='col-lg-10 order-1 justify-content-center' >
                                        <NavLink to="./Home"><button type="button" className="btn2 info1 ">⬅Prev</button></NavLink>
                                    </div>
                                    <div className='col-lg-2 order-1 justify-content-center' >

                                        <NavLink to="./Target"><button type="button" className="btn2 info1 ">Next➡</button></NavLink>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Campaign;
