import React, { useCallback, useState } from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { CheckBox, Img, Input, Text, TextArea } from "components";

const DonateModal = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname:"",
    lastname:"",
    phonenumber:"",
    address:"",
    bloodgrp:"",
    medicalhistory:""
  });
  const handleChange = (e) => {
    if (e && e.target) {
      console.log(e.target);
      const { name, value } = e.target;
      if (name) {
        setFormData({ ...formData, [name]: value });
      }
    }
  };
  
  

  const handleSubmit = (event) => {
    console.debug(
      "formData:",formData
    )
    fetch("http://localhost:5000/api/donors", {
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

    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[96%]"
      overlayClassName="bg-white-A700 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <form onSubmit={handleSubmit}>
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[1380px] mb-[103px] mt-[347px] mx-auto p-[47px] md:px-5 rounded-[10px] w-full">
          <div className="flex flex-col items-center justify-start mb-[19px] mt-[15px] w-[99%] md:w-full">
            <div className="flex flex-col items-end justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-800_02 sm:text-xl"
                  size="txtRobotoRegular24Gray80002"
                >
                  Full Name{" "}
                </Text>
                <input
                  name="firstname"
                  placeholder="First"
                  className="!placeholder:text-gray-400 !text-gray-400 leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid md:ml-[0] ml-[66px] rounded-[10px] w-[39%] md:w-full"
                  size="sm"
                  onChange={handleChange}
                />
                <input
                  name="lastname"
                  placeholder="Last Name"
                  className="!placeholder:text-gray-400 !text-gray-400 leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid md:ml-[0] ml-[97px] rounded-[10px] w-[39%] md:w-full"
                  type="text"
                  size="sm"
                  onChange={handleChange}
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[61px] w-[99%] md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                  size="txtRobotoRegular24Gray700"
                >
                  Phone Number
                </Text>
                <input
                  name="phonenumber"
                  placeholder="Number "
                  className="!placeholder:text-blue_gray-100_01 !text-blue_gray-100_01 leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid rounded-[10px] md:w-full"
                  type="number"
                  size="sm"
                  onChange={handleChange}
                />
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end mt-[148px] w-[94%] md:w-full">
                <Text
                  className="md:mt-0 mt-1.5 text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                  size="txtRobotoRegular24Gray700"
                >
                  Address
                </Text>
                <textarea
                  className="bg-white-A700 border border-blue_gray-100 border-solid leading-[normal] md:ml-[0] ml-[66px] pb-[35px] pl-[31px] pr-[35px] pt-6 sm:px-5 rounded-[10px] text-2xl md:text-[22px] placeholder:text-blue_gray-100_01 text-blue_gray-100_01 text-left sm:text-xl w-[39%] sm:w-full"
                  name="address"
                  placeholder="Type Here"
                  onChange={handleChange}
                ></textarea>
                <div className="flex flex-col gap-[49px] items-end justify-start md:ml-[0] ml-[68px] w-[43%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-[41px] items-center justify-end w-[82%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                      size="txtRobotoRegular24Gray700"
                    >
                      Age
                    </Text>
                    <input
                      name="age_One"
                      placeholder="Age"
                      className="!placeholder:text-blue_gray-100_01 !text-blue_gray-100_01 leading-[normal] md:text-[22px] p-0 sm:text-xl text-2xl text-left w-full"
                      wrapClassName="border border-blue_gray-100 border-solid rounded-[10px] w-4/5 sm:w-full"
                      size="md"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-[41px] items-center justify-between w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                      size="txtRobotoRegular24Gray700"
                    >
                      Blood Group
                    </Text>
                    <input
                      name="bloodgrp"
                      placeholder=""
                      className="p-0 placeholder:bg-white-A700 w-full"
                      wrapClassName="!rounded-[10px] border border-blue_gray-100 border-solid sm:flex-1 min-w-[400px] sm:w-full"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-[39px] items-end justify-between mt-[369px] w-full">
                <Text
                  className="mb-[3px] sm:mt-0 mt-[13px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtRobotoRomanLight24"
                >
                  Medical history
                </Text>
                <input
                  name="medicalhistory"
                  placeholder="medicalhistory"
                  className="p-0 placeholder:bg-white-A700 w-full"
                  wrapClassName="!rounded-[10px] border border-black-900 border-solid sm:flex-1 min-w-[1000px] shadow-bs7 sm:w-full"
                  onChange={handleChange}
                />
              </div>
              <CheckBox
                className="italic leading-[normal] mr-[620px] mt-[27px] sm:pl-5 text-[22px] text-left sm:text-lg md:text-xl"
                inputClassName="border border-black-900 border-solid h-5 mr-[5px] w-5"
                name="iagreetoallthe"
                id="iagreetoallthe"
                label="I agree to all the terms and conditions ."
              ></CheckBox>
              <div className="bg-white-A700 md:h-[103px] h-[72px] mt-[31px] relative rounded-lg shadow-bs6 w-[18%]">
                <div className="flex flex-row gap-[27px] h-full items-center justify-center ml-auto mr-[30px] my-auto w-[64%]">
                  <button
                    type="submit"
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-black-900"
                    size="txtRobotoRegular25Black900"
                  >
                    Submit!!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </ModalProvider>
  );
};

export default DonateModal;
