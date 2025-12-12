import './Trending.css'
import image1 from '../assets/stt_year_dec25-student.png.webp'
import image2 from '../assets/godrej_agrovet_-student.png.webp'
import image3 from '../assets/zefj_dec25-student.png.webp'



function TrendComponent(props) {
    return(
        <>
            <div className='trendComponent'>
                <img src={image1} alt="image" />
                <img src={image2} alt="image" />
                <img src={image3} alt="image" />                
            </div>
        </>
    )
}

export default TrendComponent