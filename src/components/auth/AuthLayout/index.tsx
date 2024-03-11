import styles from "./index.module.css";

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.loginContainer}>{children}</div>;
};

export default AuthLayout;
