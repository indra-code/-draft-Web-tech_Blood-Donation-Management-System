import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import LoginModal from 'modals/Login';

import { Button, Img, Line, List, Text } from 'components';

const DonorsPage = () => {
    const navigate = useNavigate();
    const [isOpenLoginModal, setLoginModal] = React.useState(false);
    const [documents, setDocuments] = React.useState([]);

    useEffect(() => {
        getData()
    }, [])

    function handleOpenLoginModal() {
        setLoginModal(true);
    }
    function handleCloseLoginModal() {
        setLoginModal(false);
    }

    // Connection URI
    const getData = () => {
        fetch('http://localhost:5000/api/donors', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Donor data:', data);
                setDocuments(data); // Handle success or error response from the server
                // You can perform actions based on the response here, e.g., show a success message or redirect to another page.
                // setDocuments(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                // Handle error scenarios if needed
            });
    };

    // getData();
    function printData(document) {
        console.log('Entering printData function');
        console.debug('DOCUMENT:', document);
        return (
            <>
            <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end p-[26px] sm:px-5 rounded-[10px] shadow-bs2 w-full">
                <div className="flex flex-col items-center justify-start mt-3.5 w-[96%] md:w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row font-roboto md:gap-10 items-start justify-between w-full">
                            <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                                size="txtRobotoBold36"
                            >
                                First Name: {document.firstname}
                                <br />
                                Last Name: {document.lastname}
                            </Text>
                            <Button
                                className="cursor-pointer font-black leading-[normal] min-w-[175px] text-center text-lg"
                                shape="round"
                            >
                                View Location
                            </Button>
                        </div>
                        <Text
                            className="text-2xl md:text-[22px] text-black-900_99 sm:text-xl"
                            size="txtManropeRegular24"
                        >
                            <>
                                <br />
                                Address: {document.address}
                                <br />
                                <br />
                                Contact Number : {document.phonenumber}
                            </>
                        </Text>
                    </div>
                </div>
            </div>
            </>
        );
    }

    return (
        <>
            <div className="flex flex-col font-roboto items-center justify-start mx-auto w-full">
                <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-[52px] md:px-10 sm:px-5 w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1316px] mx-auto w-full">
                            <Button
                                className="flex items-center justify-center mb-2 rounded-[31px] shadow-bs1 w-[61px]"
                                color="white_A700"
                                size="xs"
                            >
                                <Img
                                    src="images/img_group32.svg"
                                    alt="groupThirtyTwo"
                                />
                            </Button>
                            <Text
                                className="common-pointer md:ml-[0] ml-[287px] md:mt-0 mt-4 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                size="txtPoppinsRegular24"
                                onClick={() => navigate('/home1')}
                            >
                                Home
                            </Text>
                            <Text
                                className="common-pointer md:ml-[0] ml-[74px] md:mt-0 mt-4 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                size="txtPoppinsRegular24"
                                onClick={() => navigate('/aboutus')}
                            >
                                About Us
                            </Text>
                            <div className="flex md:flex-1 flex-col font-poppins items-center justify-start md:ml-[0] ml-[74px] md:mt-0 mt-[15px] w-[10%] md:w-full">
                                <Text
                                    className="common-pointer text-2xl md:text-[22px] text-black-900 sm:text-xl"
                                    size="txtPoppinsRegular24"
                                    onClick={() => navigate('/donors')}
                                >
                                    Find Blood
                                </Text>
                                <Line className="bg-gray-800 h-[5px] mt-[3px] w-full" />
                            </div>
                            <div className="flex md:flex-1 flex-row font-poppins items-end justify-center md:ml-[0] ml-[74px] md:mt-0 mt-[18px] w-[14%] md:w-full">
                                <a className="text-2xl md:text-[22px] text-black-900 sm:text-xl">
                                    <Text
                                        className="common-pointer"
                                        size="txtPoppinsRegular24"
                                        onClick={() =>
                                            navigate('/registration')
                                        }
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
                        <div className="flex flex-col items-center justify-start mt-[68px] w-[13%] md:w-full">
                            <Button className="cursor-pointer font-bold min-w-[162px] rounded-[25px] text-center text-xl tracking-[0.34px]">
                                Blood Donors
                            </Button>
                        </div>
                        {documents.length>0 &&(
                        <List
                            className="flex flex-col gap-[70px] items-center max-w-[1274px] mb-[117px] mt-[72px] mx-auto w-full"
                            orientation="vertical"
                        >
                            {documents.map((document) => {
                                console.log("Document:", document);
                                return printData(document);
                            })}
                        </List>
                        )}
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

export default DonorsPage;
