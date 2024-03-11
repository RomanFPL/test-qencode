import { useForm } from "react-hook-form";
import GithubIcon from "../../icons/GithubIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import styles from "./index.module.css";
import messages from "./messages";

type FormData = {
  email: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onBlur",
  });

  const onSubmit = handleSubmit((data) => {
    // Here you would handle the form submission
    console.log(data);
  });

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
      <form onSubmit={onSubmit} noValidate>
        <input
          type="email"
          placeholder={messages.emailPlaceholder}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Please enter a valid email address",
            },
          })}
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        <button type="submit" className={styles.loginButton}>
          {messages.loginButtonText}
        </button>
      </form>
      <div className={styles.signupLink}>
        {messages.signupInvitation}{" "}
        <a href="/signup">{messages.signupLinkText}</a>
      </div>
    </div>
  );
};

export default Login;
