import styles from './Top.module.scss'
import userImage from '../../../assets/self3.jpg';

function Top(){

    return(
        <header className={styles.header} >
            <image src={userImage} alt='image'/>
            <h3>
                Your Team members.
            </h3>
        </header>
    )
}

export default Top