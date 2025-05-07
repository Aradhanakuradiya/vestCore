// import React from "react";

// function Awards() {
//   return (
//     <div className="container ">
//       <div className="row">
//         <div className="col-6 p-5">
//           <img
//             style={{ height: "400px", width: "500px", borderRadius: "15px" }}
//             src="media/images/largestStock.jpg"
//           />
//         </div>

//         <div className="col-6 p-5 ">
//           <h2>India’s Leading Stock Brokerage Firm</h2>
//           <p className="mb-3">
//             Join over 2 million VestCore clients shaping the market,
//             contributing to 15% of India's daily retail trading and investment
//             activity:
//           </p>
//           <div className="row">
//             <div className="col-6">
//               <ul>
//                 <li>
//                   <p>Futures & Options Trading</p>
//                 </li>
//                 <li>
//                   <p>Commodity Market Investments</p>
//                 </li>
//                 <li>
//                   <p>Currency Market Trading</p>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-6">
//               <ul>
//                 <li>
//                   <p>Equity & IPO Investments</p>
//                 </li>
//                 <li>
//                   <p>Direct Mutual Fund Investing</p>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <img src="media/images/pressLogos.png" style={{ width: "90%" }}></img>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Awards;


import React from "react";


function Awards() {
  return (
    <div className="container awards-section">
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            className="awards-img"
            src="media/images/largestStock.jpg"
            alt="Largest Stock Broker"
          />
        </div>

        <div className="col-md-6">
          <h2 className="awards-title">India’s Leading Stock Brokerage Firm</h2>
          <p className="awards-description">
            Join over <strong>2 million</strong> VestCore clients shaping the market,
            contributing to <strong>15%</strong> of India's daily retail trading and investment
            activity:
          </p>

          <div className="row awards-list">
            <div className="col-6">
              <ul>
                <li><p>Futures & Options Trading</p></li>
                <li><p>Commodity Market Investments</p></li>
                <li><p>Currency Market Trading</p></li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li><p>Equity & IPO Investments</p></li>
                <li><p>Direct Mutual Fund Investing</p></li>
              </ul>
            </div>
          </div>

          <img
            src="media/images/pressLogos.png"
            alt="Press Coverage"
            className="press-logos"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
