import { ButtonHTMLAttributes, FC } from "react";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <button className="bg-primary h-12 w-40 rounded-lg" {...rest}>
      {children}
    </button>
  );
};

export default Button;
