import { useForm } from "react-hook-form";
import GithubIcon from "../../unknown/icons/GithubIcon";
import GoogleIcon from "../../unknown/icons/GoogleIcon";
import styles from "./index.module.css";
import messages from "./messages";
import AuthLayout from "../AuthLayout/index";
import Logo from "../../unknown/Logo/index";
import Button from "../../unknown/Button/index";
import classNames from "classNames";
import { Link } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const isLoginError = errors.email;

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
        <div
          className={classNames(styles.inputWrapper, {
            [styles.inputValid]: !isLoginError,
          })}
        >
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
          <div
            className={classNames(styles.wrapPassword, {
              [styles.showPassword]: !isLoginError,
            })}
          >
            <input
              type="password"
              placeholder={messages.passwordPlaceholder}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
              className={classNames(styles.input, {
                [styles.inputError]: errors.password,
              })}
            />
            <div className={styles.inputAdditionalInfo}>
              <p
                className={classNames(styles.error, {
                  [styles.showError]: errors.password,
                })}
              >
                {errors?.password?.message}
              </p>
              <Link to="/signup" className={styles.forgotLink}>
                {messages.forgotPassword}
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.loginButton}>
          <Button view="fill">{messages.loginButtonText}</Button>
        </div>
      </form>
      <div className={classNames(styles.signupLink)}>
        {messages.signupInvitation}
        <Link to="/signup">{messages.signupLinkText}</Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
