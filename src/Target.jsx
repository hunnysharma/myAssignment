import React from 'react'
import Instance from './Progressbar';
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import Application from './Slidercode';

const Targets = () => {
    const [value, setValue] = React.useState("0-10");

    function handleChange(newValue) {
        
        let stats ="0-10";
        switch(newValue){
            case "0":
                stats ="0-10";
            break;
            case "50":
                stats ="10-20";
            break;
            case "100":
                stats ="20-40";
            break;
            default : 
        }
      setValue(stats);
    }
    return (
        <>
        <Navbar></Navbar>
            <Instance
                no='2'
            />
            <section id='header' className='d-flex'>
                <div className='container-fluid' >
                    <div className='row' >
                        <div className='col-10 mx-auto'>
                            <div className='row' >
                                <div className='col-md-6 order-2 order-lg-1  justify-content-center flex-column' >
                                    <h1>Lets talk about your campaign</h1>
                                    
                                    <h5>DAILY BUDGET</h5>
                                    <Application
                                        handleChange={handleChange}
                                     />

                                </div>
                                <div className='col-lg-6 order-1 justify-content-center' >
                                    < div className='row' >
                                        <div className='col-lg-4 order-1 justify-content-center' ></div>
                                        <div className='col-lg-8 order-1 justify-content-center' >
                                            <div className="card  text-white  mb-4">
                                                <div className="card-body mycard">
                                                    <div className="mycard-item">
                                                        <h5 className="card-text">Leads per day  </h5>
                                                        <div><h4>{value}</h4></div>
                                                    </div>
                                                    <div className="mycard-item">
                                                        <h5 className="card-text">cost per day </h5>
                                                        <div> <h4>$10-$20</h4></div>
                                                    </div>
                                                    <div className="mycard-item">
                                                        <h5 className="card-text">start date  </h5>
                                                        <div >22nd June 2020</div>
                                                    </div>
                                                    <div className="mycard-item">
                                                        <h5 className="card-text">end date </h5>
                                                        <div >No end date</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ div>
                                    </ div>
                                </div>
                            </div>
                            <div className='row my-5' >
                                <div className='col-lg-10 order-1 justify-content-center' >
                                    <NavLink to="./Campaign"><button type="button" className="btn2 info1 ">⬅Prev</button></NavLink>
                                </div>
                                <div className='col-lg-2 order-1 justify-content-center' >

                                    <NavLink to="./Budgets"><button type="button" className="btn2 info1 ">Next➡</button></NavLink>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Targets;
