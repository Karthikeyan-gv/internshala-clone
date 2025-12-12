import './Certification.css'
import DataForComponent from './CertificationComponent.jsx';


function Certification(props) {
    return (
        <>
            <div className='certificationdiv'>
                <h2>What are you looking for today?</h2>
                <h3>Popular certification courses</h3>

                <div className='row'>
                        <ul>
                            <li>Big brands</li>
                            <li>Work from home</li>
                            <li>Part-time</li>
                            <li>MBA</li>
                            <li>Engineering</li>
                            <li>Media</li>
                            <li>Design</li>
                            <li>Data Science</li>
                        </ul>
                </div>
                <div className='certification'>
                    <div className='certification-image'>
                        <DataForComponent />
                    </div>
                </div>
                <p><b>Internshala Skill Pass:</b> Unlock lifetime accesscto all 70+ certification courses.<a className='view' href=""> {"Explore more >"}</a></p>
            </div>


        </>
    )
}

export default Certification;