import React from "react";

function Stats() {
  return (
    <div className="container stats-section">
      <div className="row align-items-start">
        <div className="col-md-6 p-4">
          <h1 className="stats-heading">Creating a Trusted Investment Hub</h1>

          <h2 className="stats-subheading">Putting Users First</h2>
          <p className="stats-text">
            With over 13 million investors relying on VestCore, we help manage
            equity portfolios worth more than ₹3.5 lakh crores.
          </p>

          <h2 className="stats-subheading">Transparent and Distraction-Free</h2>
          <p className="stats-text">
            Our platform offers intuitive tools without unnecessary clutter,
            misleading tactics, or intrusive notifications—ensuring a seamless
            investing experience.
          </p>

          <h2 className="stats-subheading">The VestCore Ecosystem</h2>
          <p className="stats-text">
            Beyond just a trading platform, VestCore fosters a financial
            network, backing over 30 fintech innovators to deliver tailored
            solutions for investors.
          </p>

          <h2 className="stats-subheading">Enabling Smarter Financial Choices</h2>
          <p className="stats-text">
            We provide more than just transaction services—our features, like
            Nudge and Kill Switch, empower investors to make well-informed
            decisions.
          </p>
        </div>

        <div className="col-md-6 text-center mt-4">
          <img
            src="media/images/d4.jpg"
            alt="Stats"
            className="stats-img"
          />
          <div>
            <a style={{textDecoration:"none",color:"red"}} href="/product" className="stats-link">
              Explore our products &nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
