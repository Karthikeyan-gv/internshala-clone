import './Recommend.css'
import DataForComponent from './RecommendComponent.jsx';


function Recommend(props) {
    return (
        <><div className='Recommend'>


            <div className='recommend-txt'>
                <h3>Internships</h3>
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
                <div className='recommend'>
                    <div className='recommend-image'>
                        <DataForComponent />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Recommend