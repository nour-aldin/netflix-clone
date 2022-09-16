import React from 'react';
import styles from './Tv.module.css';
import { devicePile, kids } from '../../assets/imgs';
import vd from '../../assets/vidoes/video-devices.m4v';
import Faq from '../Faq/Faq';
import { footerLinks } from '../../constants';
const Tv = () => {
  return (
    <>
      <div className={styles.FlexContainer}>
				<div>
					<section className={styles.Heading}>
						<h2>Watch everywhere.</h2>
						<h3>Stream unlimited movies and TV shows on<br/>your phone, tablet, laptop, and TV without<br/> paying more.</h3>
					</section>
				</div>
					
				<div>
					<img className={styles.DevicePile} src={devicePile} alt='device-pile'/>
					<video width='320' height='200' className={styles.videoPlayer} autoPlay playsInline muted loop>
        		<source src={vd} type='video/mp4'/> 
      		</video>
				</div>
      </div>

			<div className={styles.FlexContainer}>
				<div>
					<img src={kids} alt='kids'/>
				</div>

				<div className={styles.rightSide}>
					<section>
						<h2>Create profiles for kids.</h2>
						<h3>Send kids on adventures with their favorite<br/>
						characters in a space made just for them— <br/>
						free with your membership.</h3>
					</section>

				</div>	
			</div>		
			<Faq/>
    </>
  )
}

export default Tv