// import application from '../images/app.png'

export function Application() {
  return (
    <div className="app">
      <div className="app-left">
        <h3 className="app-header">Download our mobile apps</h3>
        <hr
          style={{
            marginLeft: -1,
            marginTop: -20,
            width: 56,
            height: 2,
            backgroundColor: "black",
            borderRadius: 5,
            border: "none",
          }}
        />
        <p className="app-desc">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <button className="download">Download</button>

      </div>

      {/* <img src={application} alt="" /> */}
    </div>
  );
}
