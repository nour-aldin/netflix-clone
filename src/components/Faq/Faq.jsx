import React, {useState} from 'react';
import { FAQ } from '../../constants';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styles from './Faq.module.css';

const Faq = () => {
	const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
			<div className={styles.AccordionSection}>
			<h1>Frequently Asked Questions</h1>
				<div className={styles.Container}>
					{FAQ.map((item, index) => {
						return(
							<>
								<div className={styles.Wrap} onClick={() => toggle(index)} key={item.id}>
									<h3>{item.question}</h3>
									<span>{clicked === index ? <FiMinus/> : <FiPlus/>}</span>
								</div>
								{clicked === index ? (
									<div className={styles.Dropdown}>
										<p>{item.Answer}</p>
									</div>
								) : null}
							</>
						)
					})}
				</div>
			</div>
		</IconContext.Provider>
			
  )
}

export default Faq