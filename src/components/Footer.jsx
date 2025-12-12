import './Footer.css'
// import DataForComponent from './FooterComponent.jsx';
import img1 from '../assets/google_play_store.png'
import img2 from '../assets/apple_app_store.png'
import img3 from '../assets/instagram.png'
import img4 from '../assets/arrow-trend-up.png'
import img5 from '../assets/youtube.png'
import img6 from '../assets/linkedin.png'

function Footer(props) {
    return (
        <>
            <div className='footer'>
                <h3>About Intershala</h3>
                <div className='links'>
                    <p>
                        <a href=""> About us </a>|
                        <a href=""> We're hiring </a>|
                        <a href=""> Hire interns for your company </a>|
                        <a href=""> Team Diary </a>|
                        <a href=""> Blog </a>|
                        <a href=""> Our Services </a>|
                        <a href=""> Terms & Condidtions </a>|
                        <a href=""> Privacy </a>|
                        <a href=""> Contact us </a>
                    </p>
                    <hr />
                </div>
                <div className='linkfooters'>
                    <img src={img1} alt="link" />
                    <img src={img2} alt="link" />
                </div>
                <div className='contact'>
                    <img src={img3} alt="link" />
                    <img src={img4} alt="link" />
                    <img src={img5} alt="link" />
                    <img src={img6} alt="link" />
                </div>
                <p className='right'>Copyright 2025 Internshala (Scholiverse Educare Private Limited)</p>



            </div>


        </>
    )
}

export default Footer