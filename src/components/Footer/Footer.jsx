import logo2 from '../images/logo-footer.svg'

export function Footer() {
  return (
    <div className="footer">

      <div className="logo-part">
        <img src={logo2} alt="" />
        <p className="par-top">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p className="par-bottom">©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>

      <div className="company">
        <div className="footer-header">
            Company
        </div>
        <ul className='ul'>
            <li className='footer-items'>About</li>
            <li className='footer-items'>Testimonials</li>
            <li className='footer-items'>Find a doctor</li>
            <li className='footer-items'>Apps</li>
        </ul>
      </div>

      <div className="region">
        <div className="footer-header">Region</div>
        <ul className='ul'>
            <li className='footer-items'>Indonesia</li>
            <li className='footer-items'>Singapore</li>
            <li className='footer-items'>Hongkong</li>
            <li className='footer-items'>Canada</li>
        </ul>
      </div>


      <div className="help">
        <div className="footer-header">Help</div>
        <ul className='ul'>
            <li className='footer-items'>Help center</li>
            <li className='footer-items'>Contact support</li>
            <li className='footer-items'>Instructions</li>
            <li className='footer-items'>How it works</li>
        </ul>
      </div>

    </div>
  );
}
