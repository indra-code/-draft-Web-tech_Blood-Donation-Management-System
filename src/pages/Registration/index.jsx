import React, { useCallback, useState } from "react";

import { useNavigate } from "react-router-dom";

import LoginModal from "modals/Login";

import { Button, Img, Input, Line, Text } from "components";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isOpenLoginModal, setLoginModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    password: "",
    confirmpassword: ""
  });
  function handleOpenLoginModal() {
    setLoginModal(true);
  }
  function handleCloseLoginModal() {
    setLoginModal(false);
  }
  const handleChange = (e) => {
    console.log(e.target); // Log the event target object
    const { name, value } = e.target || {};
    if (name) {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.debug(
      "formData:",formData
    )
    fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle success or error response from the server
        // You can perform actions based on the response here, e.g., show a success message or redirect to another page.
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error scenarios if needed
      });
  };
  

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col font-manrope items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-white-A700 flex flex-col md:gap-10 gap-[197px] items-center justify-start p-[47px] md:px-10 sm:px-5 w-full">
                        <div className="md:h-[382px] h-[71px] sm:h-[76px] max-w-[1331px] mt-[5px] mx-auto relative w-full">
                          <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto w-[99%]">
                            <Img
                              className="h-[62px] w-[61px]"
                              src="images/img_group32_white_a700.svg"
                              alt="groupThirtyTwo"
                            />
                            <Text
                              className="common-pointer md:ml-[0] ml-[287px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtPoppinsRegular24"
                              onClick={() => navigate("/home1")}
                            >
                              Home
                            </Text>
                            <Text
                              className="common-pointer md:ml-[0] ml-[74px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtPoppinsRegular24"
                              onClick={() => navigate("/aboutus")}
                            >
                              About Us
                            </Text>
                            <Text
                              className="common-pointer md:ml-[0] ml-[74px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                              size="txtPoppinsRegular24"
                              onClick={() => navigate("/donors")}
                            >
                              Find Blood
                            </Text>
                            <div className="flex flex-col font-poppins md:ml-[0] ml-[74px] relative w-[14%] md:w-full">
                              <div className="flex flex-row items-end justify-evenly mx-auto w-full">
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
                                  className="h-[23px] mt-[13px] w-[23px]"
                                  src="images/img_arrowdown.svg"
                                  alt="arrowdown"
                                />
                              </div>
                              <Line className="bg-gray-800 h-[5px] mt-[-2px] w-4/5 z-[1]" />
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
                          <Img
                            className="absolute bottom-[11%] h-[52px] left-[0]"
                            src="images/img_vector.svg"
                            alt="vector"
                          />
                        </div>
                        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1093px] mb-[362px] mx-auto p-[150px] md:px-5 rounded-lg shadow-bs4 w-full">
                          <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                            size="txtManropeBold36"
                          >
                            Registration
                          </Text>
                          <div className="flex flex-col items-start justify-start mt-5 w-[63%] md:w-full">
                            <Text
                              className="ml-1.5 md:ml-[0] text-black-900 text-lg"
                              size="txtManropeRegular18"
                            >
                              Email:
                            </Text>
                            <input
                              id = "email"
                              name ="email"
                              placeholder="Enter  your Email"
                              className="leading-[normal] p-0 placeholder:text-black-900_47 text-left text-lg w-full"
                              wrapClassName="border border-black-900_3f border-solid mt-[18px] w-full"
                              type="email"
                              size="xs"
                              value={formData.email}
                              onChange={handleChange}
                            />
                            <Text
                              className="ml-1.5 md:ml-[0] mt-14 text-black-900 text-lg"
                              size="txtManropeRegular18"
                            >
                              Name:
                            </Text>
                            <input
                              id = "name"
                              name="name"
                              placeholder="Enter  your Name"
                              className="leading-[normal] p-0 placeholder:text-black-900_47 text-left text-lg w-full"
                              wrapClassName="border border-black-900_3f border-solid mt-[18px] w-full"
                              type="text"
                              size="xs"
                              value={formData.name}
                              onChange={handleChange}
                            />
                            <Text
                              className="ml-1.5 md:ml-[0] mt-[70px] text-black-900 text-lg"
                              size="txtManropeRegular18"
                            >
                              Phone Number:
                            </Text>
                            <input
                              id = "phoneNumber"
                              name="phoneNumber"
                              placeholder="Enter  your Phone Number"
                              className="leading-[normal] p-0 placeholder:text-black-900_47 text-left text-lg w-full"
                              wrapClassName="border border-black-900_3f border-solid mt-[18px] w-full"
                              type="number"
                              size="xs"
                              value={formData.phoneNumber}
                              onChange={handleChange}
                            />
                            <Text
                              className="ml-0.5 md:ml-[0] mt-[63px] text-black-900 text-lg"
                              size="txtManropeRegular18"
                            >
                              Password:
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start mb-[679px] mt-[27px] w-[63%] md:w-full">
                            <input
                              id ="password"
                              name="password"
                              placeholder="Enter  your  Password"
                              className="font-manrope leading-[normal] p-0 placeholder:text-black-900_47 text-left text-lg w-full"
                              wrapClassName="border border-black-900_3f border-solid w-full"
                              type="password"
                              size="xs"
                              value={formData.password}
                              onChange={handleChange}
                            />
                            <Text
                              className="ml-1 md:ml-[0] mt-[29px] text-black-900 text-lg"
                              size="txtManropeRegular18"
                            >
                              Confirm Password:
                            </Text>
                            <input
                              id = "confirmpassword"
                              name="confirmpassword"
                              placeholder="Enter  your  Confirm Password"
                              className="font-manrope leading-[normal] p-0 placeholder:text-black-900_47 text-left text-lg w-full"
                              wrapClassName="border border-black-900_3f border-solid mt-[31px] w-full"
                              type="password"
                              size="xs"
                              value={formData.confirmpassword}
                              onChange={handleChange}
                            />
                            <button
                              type="submit"
                              className="common-pointer cursor-pointer font-black font-roboto leading-[normal] min-w-[227px] md:ml-[0] ml-[136px] mt-[131px] rounded-lg text-center text-lg"
                              shape="round"
                  
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
    </form>
    </div>
  );
};


export default RegistrationPage;
