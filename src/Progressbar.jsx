import React from 'react';
// import the stylesheet

import { Steps } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

// setup the step content


const Instance = (props) => (
    <>
    <div className="row">
    
    <div className='col-10 mx-auto my-5'>
    <Steps current={parseInt(`${props.no}`)}>
    <Steps.Item  description="Business Details" />
    <Steps.Item title="" description="Campaign Details" />
    <Steps.Item title="" description="Targets & Budgets" />
    <Steps.Item title="" description="Delivery & Payment" />
  </Steps>
  </div>
  </div>
  </>
  
)


export default Instance;