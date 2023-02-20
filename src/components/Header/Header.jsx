// import logo from '../images/logotip.svg'

export function Header(){
    return(
        <div className='header-part container'>
            <header>
                   {/* <img src={logo} alt="" /> */}
                <ul>
                    <li className="list-items">Home</li>
                    <li className="list-items">Find a doctor</li>
                    <li className="list-items">Apps</li>
                    <li className="list-items">Testimonials</li>
                    <li className="list-items">About us</li>
                </ul>
            </header>
        </div>
    )
}
