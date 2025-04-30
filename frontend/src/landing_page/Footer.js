import React from "react";

function Footer() {
  return (
    <footer style={{backgroundColor: "rgb(250,250,250)"}}>
    <div className="container border-top mt-5" >
      <div className="row mt-5">
        <div className="col">
          <h3 style={{ color: "red" }}>VestCore</h3>
          <p>
            &copy; 2022 - 2025, VestCore Financials Ltd. All rights reserved.
          </p>
        </div>
        <div className="col" id="foot-link">
          <p>Company</p>
          <a href="">About Us</a>
          <br />
          <a href="">Our Products</a>
          <br />
          <a href=""> Pricing Plans</a>
          <br />
          <a href="">Referral Program</a>
          <br />
          <a href=""> Careers</a>
          <br />
          <a href="">VestCore Tech</a>
          <br />
          <a href="">Open Source</a>
          <br />
          <a href="">Press & Media</a>
          <br />
          <a href="">VestCore Impact (CSR)</a>
        </div>
        <div className="col" id="foot-link">
          <p>Support</p>
          <a href="">Contact Support</a>
          <br />
          <a href="">Support Portal</a>
          <br />
          <a href=""> VestCore Blog</a>
          <br />
          <a href="">Market Insights</a>
        </div>
        <div className="col" id="foot-link">
          <p>Account</p>
          <a href="">Open an Account</a>
          <br />
          <a href="">Fund Transfers</a>
        </div>
      </div>
      <div className="mt-5 text-muted" style={{fontSize: "15px"}}>
      <p>
        VestCore Financials Ltd.: Member of NSE, BSE & MCX – SEBI Registration
        no.: INZ123456789. CDSL/NSDL: Depository services through VestCore
        Financials Ltd. – SEBI Registration no.: IN-DP-987654321. Commodity
        Trading through VestCore Commodities Pvt. Ltd. MCX: 12345; NSE: 67890 –
        SEBI Registration no.: INZ543219876. Registered Address: VestCore
        Financials Ltd., 101 Market Street, Financial District, Mumbai,
        Maharashtra, 400001, India. For securities broking complaints please
        write to complaints@vestcorefinancials.com, for DP related to
        dp@vestcorefinancials.com. Please carefully review the Risk Disclosure
        Document as mandated by SEBI | ICF.
      </p>
      <p>Complaint Resolution: File complaints via SEBI SCORES (Register:
      https://scores.sebi.gov.in/scores/Register.html). Required details: Name,
      PAN, Address, Mobile, Email. Benefits: Direct communication, fast
      resolution. Online Dispute Resolution & Grievance Process. Investment
      Disclaimer: Securities market investments are subject to risk. Carefully
      review all documents before investing. Investor Notices: 1) Securities as
      margin accepted via depository pledge (effective Sept 1, 2020). 2) Update
      your contact info for direct OTPs from depositories. 3) Monitor holdings
      via monthly NSDL/CDSL account statements. Protect Your Account: Update
      contact details with your broker. Receive transaction alerts directly from
      the Exchange. 
      </p>
      Investor awareness message. One-time KYC for all SEBI
      registered intermediaries. IPO Payment: No cheques needed for IPO
      subscriptions. Provide bank details and sign for authorization. Funds
      remain in your account if no allotment. No Stock Tips: VestCore does not
      provide stock tips or authorize anyone to trade on your behalf. Report
      suspicious activity here:
      https://support.vestcorefinancials.com/report-suspicious-activity.
    </div>
    </div>
    </footer>
  );
}

export default Footer;
