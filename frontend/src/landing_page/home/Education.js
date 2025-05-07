import React from 'react';

function Education() {
  return (
    <div className='container education-section'>
      <div className='row align-items-center'>
        <div className='col-md-6 mb-4'>
          <img
            src='media/images/varsitybook.jpg'
            alt='Varsity Book'
            className='education-img'
          />
        </div>

        <div className='col-md-6'>
          <h1 className='education-heading'>Focus on Accessibility and Community</h1>
          <p className='education-text'>
            Democratizing market knowledge: Access the world’s most comprehensive free online resource for stock market education — from beginner to expert levels. Join India’s most active trading and investment community on TradingQ&A, where your market questions get answered.
          </p>
          <a href='/faqs' className='education-link'>
            Q&A <i className='fa-solid fa-arrow-right'></i>
          </a>

          <p className='education-text mt-4'>
            Unlock the world of trading: Varsity delivers unparalleled, free online education, covering every aspect of the stock market. Join the active TradingQ&A community to explore market nuances and connect with fellow investors.
          </p>
          <a href='/varsity' className='education-link'>
            BullClass <i className='fa-solid fa-arrow-right'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
