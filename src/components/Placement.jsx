import './Placement.css'
import DataForComponent from './PlacementComponent.jsx';


function Placement(props) {
    return (
        <>
        <div className='Placement'>

        
            <div className='placementdiv'>
                <h3>Placement courses with AI</h3>
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
                <div className='placement'>
                    <div className='placement-image'>
                        <DataForComponent />
                    </div>
                </div>
                <p><b>Internshala Skill Pass:</b> Unlock lifetime accesscto all 70+ Placement courses.<a className='view' href=""> {"Explore more >"}</a></p>
            </div>

</div>
        </>
    )
}

export default Placement;