import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row border-top ">
        <h1 className="text-center mt-4">People</h1>
      </div>
      <div
        className="row p-5 mt-5 text-muted "
        style={{ lineHeight: "1.8", fontSize: "1em" }}
        id="about-text"
      >
        <div className="col-6 ">
          <img src="media/images/people.jpg" alt="founder img" style={{marginLeft:"7rem" ,width:"50%" , borderRadius:"50%"}}></img>
        </div>
        <div className="col-6 p-5">
          <p>
          Aradhana Kuradiya, a software architect turned fintech entrepreneur, founded VestCore with the vision of democratizing algorithmic trading for individual investors.
          </p>
          <p>Playing basketball is her zen.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
