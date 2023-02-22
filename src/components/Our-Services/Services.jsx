import lupa from "../images/Frame.svg";
import tablet from "../images/tablet.svg";
import consult from "../images/consultation.svg";
import details from "../images/details.svg";
import emergency from "../images/emergency.svg";
import tracking from "../images/tracking.svg";

export function Services() {
  return (
    <div className="services container">
      <div className="services-top">
        <h4 className="services-header">Our services</h4>
        <hr
          style={{
            width: 56,
            height: 2,
            backgroundColor: "black",
            borderRadius: 5,
            border: "none",
          }}
        />
        <p className="services-desc">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div >

      <div className="services-bottom containerr">
        <div className="cards" style={{ paddingTop: 54 }}>
          <img src={lupa} alt="" />
          <div className="cards-header"style={{paddingTop:32}} >Search doctor</div>
          <p
            className="cards-about"
            style={{ maxWidth: 266, paddingRight: 45, paddingTop:15 }}
          >
            Choose your doctor from thousands of specialist, general, and
            trusted hospitals
          </p>
        </div>

        <div className="cards" style={{ paddingTop: 62 }}>
          <img src={tablet} alt="" />
          <div className="cards-header"style={{paddingTop:29}} >Online pharmacy</div>
          <p className="cards-about" style={{ paddingRight: 52, paddingTop:15 }}>
            Buy your medicines with our mobile application with a simple
            delivery system
          </p>
        </div>

        <div className="cards" style={{ paddingTop: 47 }}>
          <img src={consult} alt="" />
          <div className="cards-header"style={{paddingTop:34}} >Consultation</div>
          <p className="cards-about" style={{ paddingRight: 50, paddingTop:15 }}>
            Free consultation with our trusted doctors and get the best
            recomendations
          </p>
        </div>

        <div className="cards" style={{ paddingTop: 46 }}>
          <img src={details} alt="" />
          <div className="cards-header"style={{paddingTop:35}} >Details info</div>
          <p className="cards-about" style={{ paddingRight: 50, paddingTop:15 }}>
            Free consultation with our trusted doctors and get the best
            recomendations
          </p>
        </div>

        <div className="cards" style={{ paddingTop: 59 }}>
          <img src={emergency} alt="" />
          <div className="cards-header"style={{paddingTop:46}} >Emergency care</div>
          <p className="cards-about" style={{ paddingRight: 50, paddingTop:15, width:266, }}>
            You can get 24/7 urgent care for yourself or your children and your
            lovely family
          </p>
        </div>

        <div className="cards" style={{ paddingTop: 59, height:356}}>
          <img src={tracking} alt="" />

          <div className="cards-header" style={{paddingTop:25 }} >Tracking</div>
          <p className="cards-about" style={{ paddingRight: 50, paddingTop:15 }}>
            Track and save your medical history and health data
          </p>
        </div>
      </div>

      <center>
        <button className="learn-more">Learn more</button>
      </center>
    </div>
  );
}
