import './Top.scss'
import userImage from './self3.jpg';

function Top(){

    return(
        <div>
            <image src={userImage} alt='image'/>
            <h3>
                Your Team members.
            </h3>
        </div>
    )
}

export default Top