import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mb-4 mt-5">
        <h3 className="text-center ">
          We introduced discount broking to India, revolutionizing the market.
          <br></br>
          We continue to lead the way, now pushing the boundaries of trading
          technology.
        </h3>
      </div>
      <div className="row p-5 mt-5 border-top text-muted " style={{lineHeight:"1.8", fontSize:"1em"}} id="about-text">
        <div className="col-6 p-5">
          <p>
            VestCore pioneered the discount broking model in India, transforming
            the trading landscape. We continue to innovate, now focusing on
            cutting-edge technology. <br></br>Launched on August 15th, 2022,
            VestCore was founded with the mission to eliminate the cost,
            support, and technology barriers facing Indian traders and
            investors.<br/> Our name, VestCore, reflects this vision.{" "}
          </p>
          <p>
            We named the company VestCore, highlighting our focus on the core of
            investing. VestCore was chosen as our name, signifying a solid, core
            foundation for your investments.
          </p>
          <p>
            Today, our disruptive pricing and proprietary technology have
            positioned us as a leading stock broker in India. <br />
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            Over 10 million clients utilize our robust investment platforms,
            processing millions of daily orders and contributing to a
            significant portion of India's retail trading volume.
          </p>
          <p>
            We're dedicated to empowering investors through our extensive free
            educational resources and vibrant online communities. <br />
            Our fintech fund, Rainmatter, invests in promising startups to
            foster the growth of Indian capital markets. We remain committed to
            continuous innovation, with updates available on our blog and media
            coverage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
