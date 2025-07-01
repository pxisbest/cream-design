import React from "react";
import classNames from "classnames";
import "./_style.scss";

export type ButtonType = "primary" | "default" | "danger" | "link";
export type ButtonSize = "lg" | "sm";
//创建props
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
//加入原生button和a标签的属性
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLElement> &
  BaseButtonProps;
type AnchorButtonProps = React.AnchorHTMLAttributes<HTMLElement> &
  BaseButtonProps;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    disabled = false, //默认值为false
    size,
    btnType = "default",
    children,
    href,
    ...restProps
  } = props;

  //btn,btn-lg,btn-primary
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

export default Button;
