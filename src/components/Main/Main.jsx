import mainImg from "../images/illustration.png";

function Main() {
  return (
    <div className="main container">
      <div className="div-left">
        <h2 className="main-header">Virtual healthcare for you</h2>
        <p className="main-desc">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className="main-btn">Consult today</button>
      </div>
      <div className="div-right">
        <img src={mainImg} alt="" />
      </div>
    </div>
  );
}

export default Main;