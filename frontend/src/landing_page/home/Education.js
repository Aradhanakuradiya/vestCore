import React from 'react';

function Education() {
    return ( 
      <div className='comtainer mt-5'>
        <div className='row'>
            <div className='col-6 ml-3 mt-4'>
               <img src='media/images/varsitybook.jpg' style={{height:"380px", width:"600px", marginLeft:"4rem", borderRadius:"15px"}}></img>
            </div>
            <div className='col-6 mt-5'>
                <h1 className='mb-3 fs-2'>Focus on Accessibility and Community</h1>
                <p>Democratizing market knowledge: Access the world’s most comprehensive free online resource for stock market education — from beginner to expert levels. Join India’s most active trading and investment community on TradingQ&A, where your market questions get answered.</p>
                <a href='/faqs' style={{textDecoration:"none",color:"red"}}>Q&A&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                <p className='mt-5'>Unlock the world of trading: Varsity delivers unparalleled, free online education, covering every aspect of the stock market. Join the active TradingQ&A community to explore market nuances and connect with fellow investors</p>
                <a href='/varsity' style={{textDecoration:"none", color:"red"}} >BullClass&nbsp;<i class="fa-solid fa-arrow-right"></i></a>
           
            </div>
        </div>
      </div>
     );
}

export default Education;