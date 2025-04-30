import React from 'react';

function Brokerage() {
    return ( 
        <div className='container '>
           <div className='row p-5 text-center mt-5 border-top'>
                <div className='col p-4 '>
                   <h3 style={{color:"red"}}>Brokerage calculator</h3>
                   <ul className="text-muted mt-4 " style={{textAlign:"left",fontSize:"15px",lineHeight:"1.8"}}>
                   <li>Equity delivery trades are completely free with no brokerage fees for transactions on NSE and BSE, making them an attractive option for investors.</li>
                   <li>For intraday trades across equity, currency, and commodities, the brokerage fee is either a flat ₹20 or 0.03% of the transaction value, whichever is lower.</li>
                   <li>For instance, a ₹50,000 intraday equity trade incurs ₹15 as brokerage, as it falls within the 0.03% threshold.</li>
                   <li>Meanwhile, options trades are charged at a flat ₹20 per executed order.</li>
                   <li>Direct mutual fund investments are also free of commissions and DP charges, ensuring no additional costs for investors pursuing mutual fund opportunities.</li>
                   </ul>
                </div>
                
            </div>
           </div>
     );
}

export default Brokerage;