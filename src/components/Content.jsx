import './Content.css'
import Trending from "./Trending.jsx";
import Recommend from "./Recommend.jsx";
import Certification from "./Certification.jsx";
import Placement from "./Placement.jsx";
import Reference from "./Reference.jsx";
import img1 from '../assets/Picsart_25-12-11_07-52-17-215.png'
import img2 from '../assets/google.png'
import img3 from '../assets/envelope.png'

function Content(props) {
    return (
        <>
            

            <div className='content'>
                <div className='banner'>
                    <div className='banner-content'>
                        <h2>India's <span>#1 platform</span></h2>
                        <h6>For frwsher jobs, internships and courses</h6>
                        <div className='banner-btn'>
                            <img className='banner-img1' src={img2} style={{width:20,height:20}}/>
                            <img className='banner-img2' src={img3} style={{width:20,height:20}}/>


                            <h6 className='login-btn-1'>Continue with Google</h6>
                            <h6 className='login-btn-2'>Continue with Email</h6>
                        </div>
                        <h6 className='des'>By continuing as a canditate, you agree to our T&C</h6>
                        <h6 className='des'>Looking to hire? Register as an employer &gt;</h6>
                    </div>
                    <img className='bannerimg' src={img1} alt="" />
                </div>
            </div>

            <Trending />

            <Certification />

            <Recommend />

            <Placement />

            <Reference />
        </>
    )
}

export default Content;