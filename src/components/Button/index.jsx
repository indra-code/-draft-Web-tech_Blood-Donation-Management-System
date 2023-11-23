import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-black-900",
    black_900: "bg-black-900 shadow-bs text-white-A700",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-[11px]", md: "p-4", lg: "p-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "fill",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "black_900"]),
};

export { Button };
