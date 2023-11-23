import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const LoginModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[89%]"
      overlayClassName="bg-white-A700 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1268px] mt-[137px] mx-auto p-[31px] md:px-5 rounded-[10px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
            <div className="bg-gradient  h-[834px] rounded-[10px] shadow-bs2 w-[45%]"></div>
            <div className="flex flex-col md:gap-10 gap-16 justify-start md:mt-0 mt-[81px]">
              <Text
                className="md:ml-[0] ml-[351px] text-3xl sm:text-[26px] md:text-[28px] text-deep_purple-900"
                size="txtRobotoMedium30"
              >
                Login
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-red-900 sm:text-xl"
                    size="txtRobotoRegular24"
                  >
                    Username
                  </Text>
                  <Img
                    className="h-[58px]"
                    src="images/img_fieldbox.svg"
                    alt="fieldbox"
                  />
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[148px] w-full">
                  <Text
                    className="sm:mt-0 mt-[5px] text-2xl md:text-[22px] text-red-900 sm:text-xl"
                    size="txtRobotoRegular24"
                  >
                    Password
                  </Text>
                  <Img
                    className="h-[58px]"
                    src="images/img_fieldbox.svg"
                    alt="fieldbox_One"
                  />
                </div>
                <div
                  className="common-pointer bg-white-A700 flex flex-row gap-[33px] items-center justify-end md:ml-[0] ml-[276px] mt-[186px] p-[17px] rounded-[10px] shadow-bs6 w-[39%] md:w-full"
                  onClick={() => navigate("/home1")}
                >
                  <Text
                    className="common-pointer sm:text-[21px] md:text-[23px] text-[25px] text-deep_purple-900"
                    size="txtRobotoRegular25"
                    onClick={() => navigate("/home1")}
                  >
                    Proceed
                  </Text>
                  <Img
                    className="h-[37px] mr-[7px]"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default LoginModal;
