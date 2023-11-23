import React from "react";

const sizeClasses = {
  txtRobotoBold48Gray80001: "font-bold font-roboto",
  txtRobotoRegular25Black900: "font-normal font-roboto",
  txtRobotoRomanLight24: "font-light font-roboto",
  txtRobotoRomanBold32: "font-bold font-roboto",
  txtManropeBold64: "font-bold font-manrope",
  txtRobotoBold40: "font-bold font-roboto",
  txtRobotoBold96: "font-bold font-roboto",
  txtRobotoRegular24: "font-normal font-roboto",
  txtManropeRegular24: "font-manrope font-normal",
  txtRobotoRegular25: "font-normal font-roboto",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtManropeBold36: "font-bold font-manrope",
  txtRobotoRegular24Gray700: "font-normal font-roboto",
  txtRobotoRegular24Gray80002: "font-normal font-roboto",
  txtManropeRegular18: "font-manrope font-normal",
  txtRobotoMedium30: "font-medium font-roboto",
  txtRobotoBold48: "font-bold font-roboto",
  txtRobotoBold36: "font-bold font-roboto",
  txtRobotoBold33: "font-bold font-roboto",
  txtRobotoBold64: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
