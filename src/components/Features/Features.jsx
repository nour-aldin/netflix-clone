import {tv} from '../../assets/imgs';
import styles from './Features.module.css';
import vd from '../../assets/vidoes/assets_images_video-tv-0819.m4v'
const Features = () => (
  <div className={styles.FlexContainer}>
    <div>
      <section className={styles.Heading}>
        <h2>Enjoy on your TV.</h2>
        <h3>Watch on Smart TVs, Playstation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players, and<br/> more.</h3>
      </section>
    </div>

    <div>
      <img className={styles.Tv} src={tv} alt='tv'/>
      <video width='385' height='215' className={styles.videoPlayer} autoPlay playsInline muted loop>
        <source src={vd} type='video/mp4'/> 
      </video>
    </div>

  </div>
)
  

export default Features