import React from "react";
import { useNavigate } from "react-router-dom";
import DonateModal from "modals/Donate";
import LoginModal from "modals/Login";
import { Button, Img, Text } from "components";

const Home1Page = () => {
  const navigate = useNavigate();
  const [isOpenLoginModal, setLoginModal] = React.useState(false);
  const [isOpenDonateModal, setDonateModal] = React.useState(false);

  function handleOpenLoginModal() {
    setLoginModal(true);
  }

  function handleCloseLoginModal() {
    setLoginModal(false);
  }

  function handleOpenDonateModal() {
    setDonateModal(true);
  }

  function handleCloseDonateModal() {
    setDonateModal(false);
  }

  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col justify-start pb-6 sm:pr-5 pr-6 w-full">
            <div className="h-[990px] max-w-[1416px] mx-auto md:px-5 relative w-full">
              <div className="absolute h-[990px] inset-y-[0] left-[0] my-auto w-[96%] md:w-full">
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0]">
                  <Text
                    className="leading-[56.00px] text-5xl sm:text-[38px] md:text-[44px] text-gray-800_01 text-center tracking-[2.40px]"
                    size="txtRobotoBold48Gray80001"
                  >
                    <>
                      Save Life<br /> Donate
                      
                      Blood{" "}
                    </>
                  </Text>
                </div>
                <Button
                  className="common-pointer absolute bottom-[20%] cursor-pointer font-black leading-[normal] min-w-[256px] right-[2%] rounded-[15px] text-3xl sm:text-[26px] md:text-[28px] text-center"
                  onClick={handleOpenDonateModal}
                  size="md"
                >
                  Donate
                </Button>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-start justify-start left-[-53%] top-2 my-auto md:pr-10 sm:pr-5 pr-[121px] py-[121px] w-[72%]"
                  style={{
                    backgroundImage: "url('images/img_herosection.png')",
                  }}
                >
                  <Img
                    className="h-[704px] md:h-auto mb-11 object-cover w-[58%]"
                    src="images/img_donationlogo1.png"
                    alt="donationlogoOne"
                  />
                </div>
              </div>
              <header className="absolute flex flex-col items-center justify-center right-[0] top-[5%] w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                  <div className="flex md:flex-1 flex-col font-poppins items-start justify-start w-[71%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-start shadow-bs3">
                        <Text
                          className="common-pointer text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtPoppinsRegular24"
                          onClick={() => navigate("/home1")}
                        >
                          Home
                        </Text>
                      </div>
                      <div className="md:h-[37px] h-[38px] relative w-[79%] md:w-full flex flex-col items-center">
                        <div className="absolute flex flex-col items-center justify-start left-[34%] top-[0]">
                          <Text
                            className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtPoppinsRegular24"
                            onClick={() => navigate("/findblood")}
                          >
                            Find Blood
                          </Text>
                        </div>
                        <div className="absolute flex flex-row sm:gap-10 h-max inset-[0] items-center justify-between m-auto p-[50px] w-full">
                          <Text
                            className="common-pointer text-2xl md:text-[22px] text-black-900 sm:text-xl"
                            size="txtPoppinsRegular24"
                            onClick={() => navigate("/aboutus")}
                          >
                            Our Process
                          </Text>
                          <a className="text-2xl md:text-[22px] text-black-900 sm:text-xl">
                            <Text
                              className="common-pointer"
                              size="txtPoppinsRegular24"
                              onClick={() => navigate("/registration")}
                            >
                              Register Now
                            </Text>
                          </a>
                        </div>
                      </div>
                    </div>
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
              </header>
            </div>
            <div className="h-[375px] md:h-[474px] ml-3 md:ml-[0] mt-[119px] md:px-5 relative w-[95%] md:w-full">
              <div className="absolute bg-white-A700 h-[252px] inset-x-[0] mx-auto rounded-[5px] shadow-bs5 top-[0] w-full"></div>
              <div className="absolute bottom-[0] flex flex-col gap-3.5 inset-x-[0] justify-start mx-auto">
                <Text
                  className="md:ml-[0] ml-[90px] md:text-5xl text-[64px] text-black-900"
                  size="txtRobotoBold64"
                >
                  Our Mission
                </Text>
                <Text
                  className="md:ml-[0] ml-[100px] md:text-3xl sm:text-[28px] text-[32px] text-gray-800_01 tracking-[1.60px] w-full"
                  size="txtRobotoRomanBold32"
                >
                  Our mission aims in helping solve the constrained reach of
                  patients who require blood for emergency situations. Our
                  website will enable the patient to reach out to multiple
                  donors/blood banks within his/her close proximity who are
                  willing to donate their blood. This application is designed to
                  store, retrieve and connect the blood donors with requesters
                  in a transparent and secure way. This will be very helpful for
                  medical institutes and for blood banks as well.
                </Text>
              </div>
            </div>
            <div className="flex flex-col font-manrope md:gap-10 gap-2.5 items-start justify-start max-w-[1320px] mb-[776px] mt-[47px] mx-auto md:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-2/5 md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="mr-[1500px] md:text-5xl text-[64px] text-black-900"
                    size="txtManropeBold64"
                  >
                    <span className="text-black-900 font-manrope text-left font-bold">
                      How can I{" "}
                    </span>
                    <span className="text-lime-A700 font-manrope text-left font-bold">
                      contribute
                    </span>
                    <span className="text-black-900 font-manrope text-left font-bold">
                      ?
                    </span>
                  </Text>
                </div>
              </div>
              <Text
                className="pr-[100px] absolute top-[107%] text-4xl sm:text-[32px] md:text-[34px] text-black-900 w-[75%]"
                size="txtManropeBold36"
              >
                <span className="text-black-900 font-manrope text-left font-bold">
                  <br /> Donating{" "}
                </span>
                <span className="text-red-A700 font-manrope text-left font-bold">
                  blood
                </span>
                <span className="text-black-900 font-manrope text-left font-bold">
                  {" "}
                  is as easy as it gets.A simple registration with your blood
                  details and proactive donation upon a receiver’s request can
                  help save millions of lives.
                </span>
              </Text>
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
      {isOpenDonateModal ? (
        <DonateModal
          isOpen={isOpenDonateModal}
          onRequestClose={handleCloseDonateModal}
        />
      ) : null}
    </>
  );
};

export default Home1Page;
