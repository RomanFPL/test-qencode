import classNames from "classNames";
import styles from "./index.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  view?: "outline" | "fill";
}

const Button: React.FC<ButtonProps> = ({
  children,
  view: type = "outline",
  ...rest
}) => {
  return (
    <button
      className={classNames(styles.button, {
        [styles.buttonOutline]: type === "outline",
        [styles.buttonFill]: type === "fill",
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
