import React from 'react';

function RightSection({imgURL,productDescription,productName,}) {
    return ( 
        <div className='container'>
        <div className='row' >
          <div className='col-6 p-3 mt-5'>
              <h1 className='fs-3 mb-3'>{productName}</h1>
              <p id='about-text' className='text-muted'>{productDescription}</p>
              <a href='/market' style={{textDecoration:"none",color:"red"}}>Market insights</a>
          </div>
          <div className='col-6  mt-2 mb-2'>
              <img src={imgURL} style={{height:"400px", width:"500px"}}/>
          </div>
        </div>
      </div>
     );
}

export default RightSection;