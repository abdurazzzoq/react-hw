import healthcare from '../images/healthcare.png'

export function Healthcare() {
  return (
    <div className="healthcare container">
      <img src={healthcare} alt="" />

      <div className="healthcare-left">
        <h3 className="health-header">Leading healthcare providers</h3>
        <hr
          style={{
            marginLeft: -1,
            marginTop: -20,
            width: 56,
            height: 2,
            backgroundColor: "black",
            borderRadius: 5,
            border: "none",
          }} />
        <p className="health-desc">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <button className="learn-more" style={{width:220}}>Learn more</button>
      </div>
    </div>
  );
}
