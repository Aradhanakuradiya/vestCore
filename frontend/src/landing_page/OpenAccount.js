import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount() {
    return (  
        <div className='container p-5 mb-5'>
        <div class="row text-center">
        <h1 className='mt-5'>Your Gateway to Investment</h1>
<p>Explore a seamless platform to invest in stocks, derivatives, mutual funds, and beyond.</p>

          <Link to="/signup"> {/* Use Link to navigate to /signup */}
             <button className='p-2 btn btn-primary fs-5 mb-5 btns' style={{width:"20%", margin: "0 auto"}}>
               Sign Up
             </button>
           </Link>
        </div>
      </div>
    );
}

export default OpenAccount;
