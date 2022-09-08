import {Navbar, Features, Download} from '../../components';
import TextFiledWithButton from '../../assets/UI/TextFiledWithButton/TextFiledWithButton';
import styles from './GetStarted.module.css';

const GetStared = () => {
  return (
    <div>
      <div className={styles.Background}>
        <Navbar/>
        <div className={styles.Heading1}>
              <h1>Unlimited movies, TV <br/>shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        </div>
        <TextFiledWithButton btnName='Get Started'/>
      </div>
      
      <Features/>
      <Download/>
    </div>
  )
}

export default GetStared;