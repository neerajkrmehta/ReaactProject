
import styles from "./Navigation.css";


const Navigation = () => {

  
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/logo.png" alt="" />
      </div>

      <ul>
        <li src="#">HOME</li>
        <li src="#">ABOUT</li>
        <li src="#">CONTACT</li>
      </ul>
    </nav>
  );
}

export default Navigation