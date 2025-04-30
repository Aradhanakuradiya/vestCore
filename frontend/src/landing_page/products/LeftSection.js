import React from 'react';

function LeftSection({imgURL, productName, productDescription}) {
    return (  
        <div className='container'>
          <div className='row' id='about-text'>
            <div className='col-6  mt-2'>
                <img src={imgURL} style={{height:"400px", width:"500px"}}/>
            </div>
            <div className='col-6 mt-5'>
                <h1 className='fs-3 mb-3'>{productName}</h1>
                <p className='text-muted'>{productDescription}</p>
                <a href='/signup' style={{textDecoration:"none", color:"red"}}>ByteVest.  &nbsp;
                <img src='./media/images/logo512.png' style={{height:"45px",width:"50px"}}></img> </a>
            </div>
          </div>
        </div>
    );
}

export default LeftSection;