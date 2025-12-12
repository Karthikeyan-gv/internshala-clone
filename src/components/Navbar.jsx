import './Navbar.css'
import img1 from '../assets/1765415512801.jpg'
import img2 from '../assets/menu-burger.png'
import img3 from '../assets/search.png'

function Navbar(params) {
    return(
        <>
            <div className='above-navbar'>
                <h5>Upskill and land your dream career - Limited period offer! Know More</h5>
            </div>
            <div className='navbar'>
                <img className='menubar' src={img2} alt="" />
                <img className='internshala' src={img1} alt="" />
                <ul>
                    <li><h5 className='search'><img className='search-img' src={img3} style={{width:20,height:20}}/>Search</h5></li>
                    <li><h5 className='login'>Login</h5></li>
                    <li><h5 className='register'>Resister</h5></li>
                    <li><h5 className='foremp'>For emloyers &gt; </h5></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;