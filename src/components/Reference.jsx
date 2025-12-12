import './Reference.css'
import img1 from '../assets/footer_bg_1920.png'
import img2 from '../assets/google.png'
import img3 from '../assets/envelope.png'

function Reference(props) {
    return (
        <>
            <div className='blueBanner'>
                <div className='blueBanner-conent'>
                    <div className='emp'>
                        <h4>Empower your career</h4>
                        <h4>with Internshala today</h4>
                    </div>
                    <img className='banner-img1' src={img2} style={{ width: 20, height: 20 }} />
                    <img className='banner-img2' src={img3} style={{ width: 20, height: 20 }} />
                    <h6 className='login-btn-1'>Continue with Google</h6>
                    <h6 className='login-btn-2'>Continue with Email</h6>

                </div>
                <img src={img1} alt="image" />
            </div>

            <div className='reference'>

                <h3>Intership by Places</h3>
                <p>Internship in Bangalore | Internship in Delhi | Internships in Hyderabad | Internship in Mumbai | Internship in Chennai | Internship in Pune | Internship in Kolkata | Internship in Gurgaon | Work From Home Internships | <a href="">View all internship</a> </p>

                <h3>Intership by Stream</h3>
                <p>Computer Science Internship | Electronics Internship | Mechanical Internship | Civil Internship | Marketing Internship | Chemical Internship | Finance Internship |  <a href="">View all internship</a></p>

                <h3>Jobs by Place</h3>
                <p>Jobs in Bangalore | Jobs in Delhi | Jobs in Hyderabad | Jobs in Gurgaon | Jobs in Kolkata | Jobs in Mumbai | Jobs in Pune | Jobs in Chennai | Jobs in Noida | <a href="">View all jobs </a></p>

                <h3>Jobs by Type</h3>
                <p>Data Entry jobs | Content writing jobs | Digital Marketing jobs | Data Science jobs | Cyber Security jobs | Pharma jobs | Teaching jobs | HR jobs | MBA jobs | <a href="">View all jobs </a></p>

                <h3>Fresher Jobs by Places</h3>
                <p>Fresher Jobs in Bangalore | Fresher Jobs in Delhi | Fresher Jobs in Hyderabad | Fresher Jobs in Chennai | Fresher Jobs in Pune | Fresher Jobs in Mumbai | Fresher Jobs in Noida | Fresher Jobs in Kolkata | Fresher Jobs in Gurgaon | <a href="">View all fresher jobs </a> </p>

                <h3>Fresher Jobs by Type</h3>
                <p>MBA Fresher Job | HR Fresher Job | Civil Fresher Job | Digital Marketing Fresher Job | Business Analyst Fresher Job | Finance Fresher Job | Accounts Fresher Job | JAVA Fresher Job | Software Testing Fresher Job | <a href="">View all fresher jobs</a></p>

                <h3>Placement Courses with AI</h3>
                <p>Full Stack Development | Data Science | Human Resource Management | Digital Marketing | UI/UX Design | Product Management | Financial Modelling | Supply Chain Logistics | Software Testing | View all courses </p>

                <h3>Certification Courses <span className='offer'>OFFER</span></h3>
                <p>Web Development with AI | Programming with Python with AI | Digital Marketing with AI | Machine Learning with AI | Advanced Excel with AI | AutoCAD with AI | Data Science with AI | Programming with C and C++ with AI | Financial Modeling and Valuation with AI</p>
            </div>
        </>
    )
}

export default Reference