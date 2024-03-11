import GithubIcon from '../../icons/GithubIcon';
import GoogleIcon from '../../icons/GoogleIcon';
import styles from './index.module.css'

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h1>Qencode</h1>
      <p>Log in to your account</p>
      <div className={styles.authButtons}>
        <button className={styles.googleButton}>
          <GoogleIcon/>
          Google
        </button>
        <button className={styles.githubButton}>
        <GithubIcon/>
          GitHub
        </button>
      </div>
      <div className={styles.divider}>OR</div>
      <input type="email" placeholder="Work email" className={styles.input} />
      <button className={styles.loginButton}>Log in to Qencode</button>
      <div className={styles.signupLink}>
        Is your company new to Qencode? <a href="/signup">Sign up</a>
      </div>
    </div>
  );
}

export default Login