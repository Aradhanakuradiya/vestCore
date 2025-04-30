import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Commission Structue</h1>
                    <p>We revolutionized discount brokerage and introduced transparent pricing in India. Enjoy flat fees with zero hidden costs.</p>
                    <a href='/pricing' style={{textDecoration:"none",color:"red"}}>See structue &nbsp;<i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>&#8377;0</h1>
                            <p>Zero-cost equity delivery and direct mutual fund investments.</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1 className='mb-3'>&#8377;20</h1>
                            <p>Intraday and Futures & Options trading at a flat fee</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;


