import './Recommend.css'
import image from '../assets/web-development.png';
import img2 from '../assets/hand-holding-usd.png'
import img3 from '../assets/clock.png'
import img4 from '../assets/marker.png'

const data = [
    {
        id: 2,
        title: "Full Stack Development",
        address: "MEL Labs",
        location: "Work From Home",
        stipend: "30,000",
        duration: 3
    },
    {
        id: 3,
        title: "WordPress Development",
        address: "Bildungsprofits",
        location: "Work From Home",
        stipend: "15,000- 25,000",
        duration: 4
    },
    {
        id: 4,
        title: "Node,js Developer",
        address: "Yardstick",
        location: "Work From Home",
        stipend: "20,000",
        duration: 6
    },
    // {
    //     id: 2,
    //     title: "React Native Development",
    //     address: "Highway Delite",
    //     location: "Work From Home",
    //     stipend: "18,000 - 22,000",
    //     duration: 6
    // },
    // {
    //     id: 1,
    //     title: "Certification courses",
    //     address: "Tara Ventures",
    //     location: "Work From Home",
    //     stipend: 15000,
    //     duration: 3
    // }
]


function RecommendComponent(props) {
    return (
        <>
            <div className='recommendComponent'>
                <div className='recommendComponent-content'>
                    <h4>{props.title}</h4>
                    <h5>{props.address}</h5>
                    <hr />
                    <h6><img src={img4} style={{width:15,height:15,position:'relative',top:2}}/>{"   " +props.location}</h6>
                    <h6><img src={img2} style={{width:15,height:15,position:'relative',top:2}}/>{"   " + props.stipend + " /months"}</h6>
                    <h6><img src={img3} style={{width:15,height:15,position:'relative',top:2}}/>{"   " + props.duration + " Months"}</h6>
                    <div className='recommendComponent-content-btn'>
                        <h5 className='internship'><span> Internship </span></h5>
                        <a href="" className='view'><h6>{"View details >"}</h6></a>
                    </div>
                </div>
            </div>

        </>
    )
}

// const setData = data.map((d) => <RecommendComponent id={d.id} title={d.title} address={d.address} location={d.location} stipend={d.stipend} duration={d.duration} />)


function DataForRecommendComponent(props) {

    return (
        <>
            {data.map((d) => (<RecommendComponent
                key={d.id}
                title={d.title}
                address={d.address}
                location={d.location}
                stipend={d.stipend}
                duration={d.duration} />))
            }
        </>
    )
}


export default DataForRecommendComponent;