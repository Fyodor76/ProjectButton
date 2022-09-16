import React from 'react';

import classNames from 'classnames';

interface Props {
  color?: "primary" | "success" | "secondary" | "danger" | "warning" | "info" | "light" | "dark";
  size?: "sm"  | "md" | "lg";
  outline?: boolean
  className?: "wide" | "narrow" | "without";
  type?: "submit" | "reset" | "button";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

type ButtonProps = React.PropsWithChildren<Props>

type DefaultProps = Partial<ButtonProps>

const defaultProps: DefaultProps = {
  color: "primary",
  outline: false,
  size: "md",
  className: 'wide',
  type: 'button',
  disabled: false,
}

const Button: React.FC<ButtonProps> = (props) => {

  const {children, onClick, disabled, color, size, type, className, outline, ...nextProps} = props

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault()
      return
    }
    if (onClick) {
      onClick(event)
    }
  }

  const outlineCheck = () => {
    if (outline) {
      return color
    }
    return ""
  }

  return (
      <button
        {...nextProps}
        type={type}
        className={classNames(className, "btn", `btn-${color}`, `btn-${size}`, `btn-outline-${outlineCheck()}`)}
        onClick={handleClick}
        >
        {children}
      </button>
  );
}

Button.defaultProps = defaultProps;
Button.displayName = "Button";

export default Button;