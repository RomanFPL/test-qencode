import { useForm } from "react-hook-form";
import styles from "./index.module.css";
import messages from "./messages";
import AuthLayout from "../AuthLayout/index";
import Logo from "../../unknown/Logo/index";

type FormData = {
  password: string;
  confirmPassword: string;
};

const ResetPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // Call API to reset password
  });

  const newPassword = watch("password");

  return (
    <AuthLayout>
      <Logo />
      <h2>{messages.createNewPassword}</h2>
      <form onSubmit={onSubmit} noValidate>
        <input
          type="password"
          placeholder={messages.passwordPlaceholder}
          {...register("password", {
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          className={`${styles.input} ${
            errors.password ? styles.inputError : ""
          }`}
        />
        {errors.password && (
          <p className={styles.error}>{errors.password.message}</p>
        )}

        <input
          type="password"
          placeholder={messages.confirmPasswordPlaceholder}
          {...register("confirmPassword", {
            validate: (value) =>
              value === newPassword || "The passwords do not match",
          })}
          className={`${styles.input} ${
            errors.confirmPassword ? styles.inputError : ""
          }`}
        />
        {errors.confirmPassword && (
          <p className={styles.error}>{errors.confirmPassword.message}</p>
        )}

        <button type="submit" className={styles.resetButton}>
          {messages.resetPasswordButton}
        </button>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
