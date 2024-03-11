import GithubIcon from "../../icons/GithubIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import styles from "./index.module.css";
import messages from "./messages";

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h1>{messages.loginSubtitle}</h1>
      <p>{messages.loginTitle}</p>
      <div className={styles.authButtons}>
        <button className={styles.googleButton}>
          <GoogleIcon />
          {messages.googleButtonText}
        </button>
        <button className={styles.githubButton}>
          <GithubIcon />
          {messages.githubButtonText}
        </button>
      </div>
      <div className={styles.divider}>{messages.dividerText}</div>
      <input
        type="email"
        placeholder={messages.emailPlaceholder}
        className={styles.input}
      />
      <button className={styles.loginButton}>{messages.loginButtonText}</button>
      <div className={styles.signupLink}>
        {messages.signupInvitation}{" "}
        <a href="/signup">{messages.signupLinkText}</a>
      </div>
    </div>
  );
};

export default Login;
