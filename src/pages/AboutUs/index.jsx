import React from "react";

import { useNavigate } from "react-router-dom";

import LoginModal from "modals/Login";

import { Button, Img, Line, Text } from "components";

const AboutUsPage = () => {
  const navigate = useNavigate();
  const [isOpenLoginModal, setLoginModal] = React.useState(false);

  function handleOpenLoginModal() {
    setLoginModal(true);
  }
  function handleCloseLoginModal() {
    setLoginModal(false);
  }

  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 md:h-[1288px] sm:h-[1342px] h-[3231px] pb-10 pr-10 md:px-5 relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[98%]">
              <div className="flex flex-col md:gap-10 gap-[94px] justify-start w-full">
                <div className="h-[990px] relative w-full">
                  <Img
                    className="absolute h-[990px] inset-y-[0] left-[0] my-auto object-cover"
                    src="images/img_herosection.png"
                    alt="herosection"
                  />
                  <Text
                    className="absolute right-[5%] md:text-5xl text-8xl text-black-900 text-center top-1/4 tracking-[4.80px]"
                    size="txtRobotoBold96"
                  >
                    OUR PROCESS
                  </Text>
                  <header className="absolute flex flex-col items-center justify-center right-[0] top-[3%] w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                        <div className="flex md:flex-1 flex-col font-poppins items-center justify-start w-[47%] md:w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start shadow-bs3">
                              <Text
                                className="common-pointer text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                size="txtPoppinsRegular24"
                                onClick={() => navigate("/home1")}
                              >
                                Home
                              </Text>
                            </div>
                            <Text
                              className="common-pointer sm:ml-[0] ml-[74px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtPoppinsRegular24"
                              onClick={() => navigate("/aboutus")}
                            >
                              Our Process
                            </Text>
                            <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[38px]">
                              <Text
                                className="common-pointer text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                size="txtPoppinsRegular24"
                                onClick={() => navigate("/donors")}
                              >
                                Find Blood
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[5px] mt-0.5"
                            src="images/img_tabbarselected.svg"
                            alt="tabbarselected"
                          />
                        </div>
                        <div className="flex md:flex-1 flex-row font-poppins items-end justify-center md:ml-[0] ml-[74px] w-1/5 md:w-full">
                          <a className="text-2xl md:text-[22px] text-black-900 sm:text-xl">
                            <Text
                              className="common-pointer"
                              size="txtPoppinsRegular24"
                              onClick={() => navigate("/registration")}
                            >
                              Register Now
                            </Text>
                          </a>
                          <Img
                            className="h-[23px] ml-[5px] mt-[13px] w-[23px]"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                        <Button
                          className="common-pointer border-2 border-black-900 border-solid cursor-pointer font-roboto leading-[normal] min-w-[224px] md:ml-[0] ml-[35px] sm:text-[21px] md:text-[23px] text-[25px] text-center"
                          onClick={handleOpenLoginModal}
                          shape="round"
                          color="white_A700"
                          size="lg"
                        >
                          Log In
                        </Button>
                      </div>
                    </div>
                  </header>
                </div>
                <div className="h-[258px] md:ml-[0] ml-[57px] relative w-[24%]">
                  <div className="bg-black-900_01 h-[258px] m-auto rounded-[164px] w-full"></div>
                  <div className="absolute h-[258px] inset-[0] justify-center m-auto w-full">
                    <div className="bg-black-900_01 h-[258px] m-auto rounded-[164px] w-full"></div>
                    <Text
                      className="absolute left-[17%] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 top-[37%] tracking-[2.00px]"
                      size="txtRobotoBold40"
                    >
                      REGISTER
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Line className="absolute bg-black-900 h-[3px] left-[27%] top-[37%] w-[7%]" />
            <div className="absolute bottom-[20%] md:h-[1114px] sm:h-[1316px] h-[1496px] right-[4%] w-3/4 md:w-full">
              <div className="flex flex-col md:gap-10 gap-[242px] h-full justify-start m-auto w-full">
                <div className="md:h-[596px] h-[776px] ml-52 md:ml-[0] relative w-[81%] md:w-full">
                  <div className="md:h-[596px] h-[776px] m-auto w-full">
                    <div className="absolute h-[258px] left-[0] top-[0] w-[38%]">
                      <div className="bg-black-900_01 h-[258px] m-auto rounded-[164px] w-full"></div>
                      <Text
                        className="absolute inset-x-[0] leading-[100.00px] mx-auto sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 top-[7%] tracking-[2.00px] w-[72%] sm:w-full"
                        size="txtRobotoBold40"
                      >
                        GET IN CONTACT
                      </Text>
                    </div>
                    <div className="absolute bottom-[0] h-[596px] right-[0] w-[77%] md:w-full">
                      <div className="bg-black-900_02 h-[596px] m-auto rounded-[329px] w-full"></div>
                      <Text
                        className="absolute inset-x-[0] leading-[100.00px] mx-auto sm:text-[29px] md:text-[31px] text-[33px] text-center text-white-A700 top-[9%] tracking-[1.65px]"
                        size="txtRobotoBold33"
                      >
                        <>
                          RECEIVE/DONATE CLEAN
                          <br />&<br />
                          SAFE BLOOD
                          <br />
                          AS FAST AS POSSIBLE
                        </>
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[52px] left-[38%] top-[20%]"
                    src="images/img_arrow2.svg"
                    alt="arrowTwo"
                  />
                </div>
                <div className="h-[478px] relative w-[58%] md:w-full">
                  <div className="bg-black-900_03 h-[478px] m-auto rounded-[310px] w-full"></div>
                  <Text
                    className="absolute bottom-[21%] inset-x-[0] leading-[100.00px] mx-auto text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 tracking-[2.40px]"
                    size="txtRobotoBold48"
                  >
                    <>
                      SAVE
                      <br />
                      LIVES!!!
                    </>
                  </Text>
                </div>
              </div>
              <Img
                className="absolute bottom-[31%] h-[266px] inset-x-[0] mx-auto"
                src="images/img_arrow3.svg"
                alt="arrowThree"
              />
            </div>
          </div>
        </div>
      </div>
      {isOpenLoginModal ? (
        <LoginModal
          isOpen={isOpenLoginModal}
          onRequestClose={handleCloseLoginModal}
        />
      ) : null}
    </>
  );
};

export default AboutUsPage;
