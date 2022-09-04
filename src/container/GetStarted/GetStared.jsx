import {Navbar} from '../../components';
import styles from './GetStarted.module.css';

const GetStared = () => {
  return (
    <div className={styles.Background}>
      <Navbar/>
      <div className={styles.Heading1}>
            <h1>Unlimited movies, TV <br/>shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create<br/> or restart your membership.</h3>
      </div>
    </div>
  )
}

export default GetStared;