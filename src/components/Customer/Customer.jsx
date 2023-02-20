// import edward from "../images/edward.svg";

export function Customer() {
  return (
    <div className="customer container">
      <div className="customer-top">
        <h3 className="customer-header">What our customer are saying</h3>
        <hr
          style={{
            background: "white",
            borderRadius: 6,
            width: 56,
            height:2,
            border: "none",
          }}
        />
      </div>

      <div className="edward">
        <div className="edward-left">
          {/* <img src={edward} alt="" /> */}
          <div style={{marginLeft:29}}>
          <h6 className="edward-name">Edward Newgate</h6>
          <p className="edward-sub">Founder Circle</p>
        </div>
        </div>
        <div className="edward-right">
          <p className="edward-right-par">
            “Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely”
          </p>
        </div>
      </div>
    </div>
  );
}
