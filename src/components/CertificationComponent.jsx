import './Certification.css'
import img1 from '../assets/java.png'
import img2 from '../assets/web-development.png'
import img3 from '../assets/artificial-intelligence-and-machine-learning.png'
import img4 from '../assets/hand-holding-usd.png'
import img5 from '../assets/clock.png'
import img6 from '../assets/marker.png'

const data = [
    {
        id: 2,
        image: img1,
        title: "Core Java with AI",
        rating: 4.9,
        enrolled: 123456
    },
    {
        id: 3,
        image: img2,
        title: "Web Development with AI",
        rating: 4.5,
        enrolled: 789012
    },
    {
        id: 4,
        image: img3,
        title: "AI & ML",
        rating: 4.6,
        enrolled: 345678
    }
]


function Certification(props) {
    return (
        <>
            <div className='certification-component'>
                <div className='certification-content'>
                    <img src={props.image} alt="image" />
                    <h4>{props.title}</h4>
                    <div className='certification-content-btn'>
                    <h6>{"# "+props.rating+" | "+props.enrolled+" Enrolled"}</h6>
                        <a href="" className='view'><h6>{"Know more >"}</h6></a>
                    </div>
                </div>
            </div>

        </>
    )
}

function DataForCertificationComponent(props) {

    return (
        <>
            {data.map((d) => (<Certification
                key={d.id}
                title={d.title}
                rating={d.rating}
                enrolled={d.enrolled}
                image={d.image} />))
            }
        </>
    )
}


export default DataForCertificationComponent;