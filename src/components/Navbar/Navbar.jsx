import {/*langIcon,*/ logo } from "../../assets/imgs";
import styles from './Navbar.module.css';

const Navbar = () => (
	<div className={styles.header}>
			<img className={styles.Logo} src={logo} alt='logo'/>
			
		<div className={styles.RightHand}>
			<select name="language">
				<option value='eng'>English</option>
				<option value='ar'>Arabic</option>
			</select>
			<button>Sign in</button>
		</div>
	</div>
)
  

export default Navbar;