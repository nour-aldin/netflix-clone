import { mobile, boxshot } from "../../assets/imgs";
import styles from './Download.module.css';
//import Spinner from '../../assets/UI/Spinner/Spinner';

import React from 'react'

const Download = () => {
  return (
  	<div className={styles.FlexContainer}>
    	<div className={styles.Items}>
				<img className={styles.mobile} src={mobile} alt='mobile'/>

				<div className={styles.boxshot}>
					<div>
						<img className={styles.boxshotImg} src= {boxshot} alt='boxshot'/>
					</div>
					<div className={styles.heading}>
						<h4>Stranger Things</h4>
						<h5>Downloading...</h5>
					</div>
				</div>
      </div>
			<div className={styles.rightSide}>
				<section>
				<h2>Download your shows to watch offline.</h2>
				<h3>Save your favorites easily and always have <br/>something to watch.</h3>
				</section>

			</div>
    </div>
  )
}

export default Download