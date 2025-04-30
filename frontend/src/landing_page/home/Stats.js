import React from "react";

function Stats() {
  return (
    <div className="container ">
      <div className="row p-5 ">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Creating a Trusted Investment Hub</h1>
          <h2 className="fs-4">Putting Users First</h2>
          <p className="text-muted">
            With over 13 million investors relying on VestCore, we help manage
            equity portfolios worth more than ₹3.5 lakh crores.
          </p>

          <h2 className="fs-4">Transparent and Distraction-Free</h2>
          <p className="text-muted">
            Our platform offers intuitive tools without unnecessary clutter,
            misleading tactics, or intrusive notifications—ensuring a seamless
            investing experience.
          </p>

          <h2 className="fs-4">The VestCore Ecosystem</h2>
          <p className="text-muted">
            Beyond just a trading platform, VestCore fosters a financial
            network, backing over 30 fintech innovators to deliver tailored
            solutions for investors.
          </p>

          <h2 className="fs-4">Enabling Smarter Financial Choices</h2>
          <p className="text-muted">
            We provide more than just transaction services—our features, like
            Nudge and Kill Switch, empower investors to make well-informed
            decisions.
          </p>
        </div>
        <div className="col-6 mt-5">
          <img
            className=" mx-5 mt-5"
            src="media/images/d4.jpg"
            style={{ width: "90%" }}
          ></img>
          <div className=" mt-4">
            <a
              href="/product"
              className="mx-5"
              style={{ textDecoration: "none", color: "red" }}
            >
              Explore our products &nbsp;<i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
