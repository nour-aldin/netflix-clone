import { useState } from 'react';
import styles from './TextFiledWithButton.module.css';
const TextFiledWithButton = ({value='',onChange ,btnName}) => {

  const [emailValue, setEmailValue] = useState(value);

  const handelInput = (event) => {
    console.log(event.target.value);
    setEmailValue(event.target.value);
    if(typeof onChange === "function") {
      console.log('enterd the If');
      onChange(event.target.value);
    }
  }

  const handelButton = () => {
    alert(emailValue);
  }
  return (
    <div className={styles.header}>
      <form>
        <input type='email' value={emailValue} placeholder='Email address' onChange={handelInput}/>
        <button onClick={handelButton}>{btnName}</button>
      </form>
    </div>
  )
}

export default TextFiledWithButton