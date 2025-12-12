import './Trending.css'
import TrendComponent from './TrendComponent.jsx';


function Trending(props) {
    return (
        <>       
            <div className='trending'>
                <h3>Trending on Internshala</h3>
                <div className='trending-image'>
                    <TrendComponent />
                </div>
            </div>
        </>
        
    )
}

export default Trending