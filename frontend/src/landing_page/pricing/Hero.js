import React from 'react';


function Hero() {
  return (
    <div className='container hero-section'>
      <div className='row text-center'>
        <h1 className='hero-title'>Commission Structure</h1>
        <div className='row'>
          <div className='col-md-4 mb-4'>
            <div className='hero-card'>
              <img
                className='hero-image'
                src='media/images/freeEquity.jpg'
                alt='Free Equity Delivery'
              />
              <h2 className='hero-heading'>Free Equity Delivery</h2>
              <p className='hero-text'>
                No brokerage fees for equity delivery investments on NSE and BSE.
              </p>
            </div>
          </div>

          <div className='col-md-4 mb-4'>
            <div className='hero-card'>
              <img
                className='hero-image'
                src='media/images/intradayTrades.jpg'
                alt='Intraday Trades'
              />
              <h2 className='hero-heading'>Intraday and F&O Trades</h2>
              <p className='hero-text'>
                Flat ₹20 or 0.03% per executed order for intraday trades across equity, currency, and commodity.
              </p>
            </div>
          </div>

          <div className='col-md-4 mb-4'>
            <div className='hero-card'>
              <img
                className='hero-image'
                src='media/images/mutualFund.jpg'
                alt='Direct Mutual Fund'
              />
              <h2 className='hero-heading'>Free Direct Mutual Fund</h2>
              <p className='hero-text'>
                No commissions and no DP charges for direct mutual fund investments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
