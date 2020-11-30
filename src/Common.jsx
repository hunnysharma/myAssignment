import React from 'react'
import { NavLink } from 'react-router-dom'

const Common = () => {
  return (
    <>
   
      <section id='header' className='d-flex'>
        <div className='container-fluid' >
        
          <div className='row' >
            <div className='col-10 mx-auto'>
              <div className='row' >
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1  justify-content-center flex-column' >
                  <h1>Let's get started with your business details.</h1>
                  <h5 className='my-3'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   </h5>

                </div>
                <div className='col-lg-6 order-1 justify-content-center' >
                  <div className='row' >
                    <div className='col-lg-2 order-1 justify-content-center' >
                    </div>
                    <div className='col-lg-10 order-1 justify-content-center' >
                      <h4>Fill in the form below</h4>
                      <form>
                        <div className="form-group my-3">

                          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="BUSINESS NAME" />

                        </div>
                        <div class="form-group my-3">

                          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="WEBSITE" />
                        </div>
                        <div class="form-group my-3">

                          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="LOCATION" />
                        </div>
                        <div class="form-group my-3">

                          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="PHONE NUMBER" />
                        </div>
                        <div className="form-group my-3">
                          <select className="form-control" id="exampleFormControlSelect1">
                            <option>BUSINESS CATEGORY</option>
                            <option>2</option>
                            <option>3</option>

                          </select>
                        </div>
                        <div className='row my-5' >
                          <div className='col-lg-7 order-1 justify-content-center' >
                          </div>
                          <div className='col-lg-5 order-1 justify-content-center' >

                         <NavLink to="./Campaign"><button type="button" class="btn2 info1 ">Next➡</button></NavLink> 
                          </div>
                        </div>


                      </form>
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

export default Common
