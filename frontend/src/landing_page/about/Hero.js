
import React from "react";

function Hero() {
  return (
    <div className="container hero-container">
      <div className="row">
        <div className="col">
          <h3 className="hero-heading">
            We introduced <span className="colored-highlight">discount broking</span> to India, revolutionizing the market.
            <br />
            We now lead the way in <span className="colored-highlight">trading technology innovation</span>.
          </h3>
        </div>
      </div>

      <div className="row hero-section hero-border-top">
        <div className="col-md-6">
          <p className="hero-paragraph">
            <span className="colored-highlight">VestCore</span> pioneered the discount broking model in India, transforming
            the trading landscape. We continue to innovate, now focusing on
            cutting-edge technology.
            <br />
            Launched on <strong>August 15th, 2022</strong>, we were founded to remove cost,
            support, and tech barriers faced by Indian traders and investors.
          </p>
          <p className="hero-paragraph">
            The name <strong>VestCore</strong> emphasizes our focus on the core of
            investing — providing a solid foundation for your financial journey.
          </p>
          <p className="hero-paragraph">
            Our <span className="colored-highlight">disruptive pricing</span> and in-house tech have positioned us as a leading
            broker in India.
          </p>
        </div>
        <div className="col-md-6">
          <p className="hero-paragraph">
            Over <strong>10 million clients</strong> use our platforms, processing millions of daily
            orders and contributing significantly to India's retail trading volume.
          </p>
          <p className="hero-paragraph">
            We empower investors with free educational resources and thriving communities.
            <br />
            Our fintech fund, <span className="colored-highlight">Rainmatter</span>, supports startups that grow India's capital
            markets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
