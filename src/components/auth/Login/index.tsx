import { useForm } from "react-hook-form";
import GithubIcon from "../../icons/GithubIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import styles from "./index.module.css";
import messages from "./messages";
import AuthLayout from "../AuthLayout/index";
import Logo from "../../unknown/Logo/index";
import Button from "../../unknown/Button/index";
import classNames from "classNames";
import { Link } from "react-router-dom";

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
    <AuthLayout>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <p className={styles.title}>{messages.loginTitle}</p>
      <div className={styles.authButtons}>
        <Button>
          <GoogleIcon />
          {messages.googleButtonText}
        </Button>
        <Button>
          <GithubIcon />
          {messages.githubButtonText}
        </Button>
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
          className={styles.input}
        />
        <p
          className={classNames(styles.error, {
            [styles.showError]: errors.email,
          })}
        >
          {errors?.email?.message}
        </p>
        <Button view="fill" className={styles.loginButton}>
          {messages.loginButtonText}
        </Button>
      </form>
      <div className={styles.signupLink}>
        {messages.signupInvitation}
        <Link to="/signup">{messages.signupLinkText}</Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
