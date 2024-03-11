import React from "react";
import { useForm } from "react-hook-form";
import styles from "./ResetPassword.module.css"; // Make sure you have this CSS file
import messages from "./messages"; // Assuming you have messages for Reset Password

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

  // This is used for the password confirmation validation
  const newPassword = watch("password");

  return (
    <div className={styles.resetPasswordContainer}>
      <h1>Qencode</h1>
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
    </div>
  );
};

export default ResetPassword;
