import './Placement.css'
import img1 from '../assets/java.png'
import img2 from '../assets/web-development.png'
import img3 from '../assets/artificial-intelligence-and-machine-learning.png'
import icon1 from '../assets/google.png'
import icon2 from '../assets/youtube.png'
import icon3 from '../assets/paypal.png'
import icon4 from '../assets/cognizant.png'
import icon5 from '../assets/microsoft.png'
import icon6 from '../assets/paytm.png'
import iconai from '../assets/ai_stars.svg'
import img4 from '../assets/hand-holding-usd.png'
import img5 from '../assets/clock.png'
import img6 from '../assets/marker.png'
import img7 from '../assets/arrow-trend-up.png'


const data = [
    {
        id: 2,
        image: img1,
        title: "Digital Marketing Course",
        rating: 4.6,
        duration: 4,
        salary:10,
        icon1:icon1,
        icon2:icon2
    },
    {
        id: 3,
        image: img2,
        title: "Data Science Cource",
        rating: 4.5,
        duration: 5,
        salary:9,
        icon1:icon3,
        icon2:icon4
    },
    {
        id: 4,
        image: img3,
        title: "Full Stack Development Course",
        rating: 4.9,
        duration: 6,
        salary:18,
        icon1:icon5,
        icon2:icon6
    }
]


function PlacementComponent(props) {
    return (
        <>
            <div className='placementComponent'>
                <div className='placement-content'>
                    <h5 className='rating'>{"# "+props.rating}</h5>
                    <img src={props.image} alt="image" />
                    <div className='gold'><p>Placement Course with AI </p></div>
                    <h4>{props.title}</h4>
                    <h6><img src={img5} style={{width:15,height:15,position:'relative',top:2}}/>{"  "+props.duration+" months course with Live sessions"}</h6>
                    <h6><img src={img4} style={{width:15,height:15,position:'relative',top:2}}/>{"  Highest salary offered: $"+props.salary+" LPA"}</h6>
                    <h6><img src={img7} style={{width:15,height:15,position:'relative',top:2}}/>{"  Learn from industry experts of"}</h6>
                    <img className='icon' src={props.icon1} style={{width:20,height:20}} alt="icon1" />
                    <img className='icon' src={props.icon2} alt="icon2" />
                    <div className='placementComponent-content-btn'>                    
                        <a href="" className='view'><h6>{"Know more >"}</h6></a>
                    </div>
                </div>
            </div>

        </>
    )
}

function DataForPlacementComponent(props) {

    return (
        <>
            {data.map((d) => (<PlacementComponent
                key={d.id}
                title={d.title}
                rating={d.rating}
                duration={d.duration}
                image={d.image} />))
            }
        </>
    )
}


export default DataForPlacementComponent;