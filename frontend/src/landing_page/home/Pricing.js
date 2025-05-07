import React from 'react';

function Pricing() {
    return (
        <div className='container pricing-container'>
            <div className='row align-items-center'>
                <div className='col-md-5'>
                    <h1 className='pricing-header mb-3'>Commission Structure</h1>
                    <p className='pricing-description'>
                        We revolutionized discount brokerage and introduced transparent pricing in India.
                        Enjoy flat fees with zero hidden costs.
                    </p>
                    <a href='/pricing' className='pricing-link'>
                        See structure &nbsp;<i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <div className='col-md-1'></div>

                <div className='col-md-6 mb-4'>
                    <div className='row text-center'>
                        <div className='col-md-6 mb-3'>
                            <div className='pricing-card'>
                                <h1 className='pricing-amount'>&#8377;0</h1>
                                <p className='pricing-note'>
                                    Zero-cost equity delivery and direct mutual fund investments.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 mb-3'>
                            <div className='pricing-card'>
                                <h1 className='pricing-amount'>&#8377;20</h1>
                                <p className='pricing-note'>
                                    Intraday and Futures & Options trading at a flat fee.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
