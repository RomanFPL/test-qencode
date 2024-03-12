import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../unknown/Button";
import Logo from "../../unknown/Logo";
import AuthLayout from "../AuthLayout";
import styles from "./index.module.css";
import messages from "./messages";
import classNames from "classNames";
import { resetPassword } from "../../../api/auth";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<{ email: string }>();
  const navigate = useNavigate();

  const onSubmit = async (data: { email: string }) => {
    try {
      const response = await resetPassword(data.email);
      if (!response.error) navigate("/reset-password");
      console.log("Password reset email sent:", response);
    } catch (error: any) {
      console.error("Failed to reset password:", error.message);
      setError("email", {
        type: "manual",
        message: error?.response?.data?.detail || "Failed to reset password",
      });
    }
  };

  return (
    <AuthLayout>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <p className={styles.title}>{messages.forgotPassword}</p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={classNames(styles.inputWrapper)}>
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
        </div>
        <div className={styles.loginButton}>
          <Button view="fill">{messages.send}</Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;
