import React from 'react';

function Hero() {
    return (  
        <div className='container'>
           <div className='row text-center mt-5'>
            <h1>Commission Structue</h1>
            <div className='row p-5 mt-4'>
                <div className='col-4 p-4'>
                    <img style={{height:"200px", width:"200px"}} src='media/images/freeEquity.jpg'></img>
                    <h1 className='fs-3 mt-2'>Free equity delivery</h1>
                    <p>No brokerage fees for equity delivery investments on NSE and BSE.</p>
                </div>
                <div className='col-4 p-4'>
                <img style={{height:"200px", width:"200px"}} src='media/images/intradayTrades.jpg'></img>
                    <h1 className='fs-3 mt-2'>Intraday and F&O Trades</h1>
                    <p>Flat ₹20 or 0.03% per executed order for intraday trades across equity, currency, and commodity.</p>
                </div>
                <div  className='col-4 p-4'>
                <img style={{height:"200px", width:"200px"}} src='media/images/mutualFund.jpg'></img>
                    <h1 className='fs-3 mt-2'>Free Direct Mutual Fund</h1>
                    <p>No commissions and no DP charges for direct mutual fund investments.</p>
                </div>
            </div>
           </div>
        </div>
    );
}

export default Hero;