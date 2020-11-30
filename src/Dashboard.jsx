import React from 'react'
import Navbar2 from './Navbar2'

const Dashboard = () => {
    return (
        <>
        <Navbar2></Navbar2>
        <div id='header' className='container-fluid' >
                    <div className='row' >
                        <div className='col-10 mx-auto'>
                            <div className='row' >
                                <div className='col-md-6 order-2 order-lg-1  justify-content-center flex-column' >
                                    <h1>Campaign Name</h1>
                                    <h5 className='my-2'>Your campaign is being processed. We will
                                    start delivering the first lead within 24 hours</h5><br/>
                                    <form>
                                        <div className="row">
                                            <div className="col-4">
                                                <input type="date" className="form-control" placeholder="CARD NUMBER" />
                                            </div>
                                            <div className="col-4 ">
                                                <input type='date' className="form-control" placeholder="EXPIRY DATE" />
                                            </div>
                                           
                                        </div>
                                    </form>
                                </div>
                                <div className='col-md-4 order-1 justify-content-center' ></div>
                                <div className='col-md-2 order-1 justify-content-center' >
                                   <img height='100px' src='https://preview.pixlr.com/images/800wm/100/1/1001486725.jpg' alt='myimg'/>
                                   <h5>Pause Campaign</h5>
                                </div>
                                
                            </div>
                            <div  className='my-5'>
                            <img  height='400px' width='1200px' src='https://i.pinimg.com/originals/3a/8a/f2/3a8af2ed51c5ba056c0ffc30750eafd4.png' alt='myimg'/>
                            </div>
                            <div className='my-5'>
                            <img height='400px' width='1200px' src='https://editorial.azureedge.net/miscelaneous/dent_a-637024569430153524.png' alt='myimg'/>
                            </div>
                            <div className='my-5'>
                            <img height='400px' width='1200px' src='https://image.cnbcfm.com/api/v1/image/106561898-1591113703340-20200602_quick_service_restaurant_transactions.png?v=1591113986&w=720&h=439&imgcrop=n' alt='myimg'/>
                            </div>




                        </div>
                    </div>
                </div>



        </>
    )
};


export default Dashboard;