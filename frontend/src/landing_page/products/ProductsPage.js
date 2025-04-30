import React from 'react';
import RightSection from './RightSection';
import LeftSection from './LeftSection';
import Hero from './Hero';
import Universe from './Universe';

function ProductsPage() {
    return (  
        <>
        <Hero/>
        <LeftSection imgURL="media/images/bytevest.jpg" productName="ByteVest" productDescription="Your gateway to the digital age of investing. Experience seamless, data-driven trading with our cutting-edge platform.Our platform provides access to comprehensive market analytics and real-time information, helping you make informed decisions in today's fast-paced digital markets."/>

        <RightSection imgURL="media/images/console.png" productName="Analysis" productDescription="Monitor Market Financial Progress:  Offers detailed reports and visual insights into  trades and investments, allowing you to track  performance and make strategic adjustments." />

          <Universe/>
         </>
    );
}

export default ProductsPage;