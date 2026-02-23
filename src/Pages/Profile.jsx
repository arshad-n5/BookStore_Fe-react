import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { addBook, getUserDetails, updateUser } from "../Services/AllApi";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";

const Profile = () => {
  useEffect(() => {
    getUserData();
  }, []);
  const [userDetails, setUserDetails] = useState({});
  const [currentPassword, setCurrentPassword] = useState("");
  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  const [showSellBook, setShowSellBook] = useState(true);
  const [showBookStatus, setBookStatus] = useState(false);
  const [showPurchase, setShowPurchase] = useState(false);
  const [preveiw, setpreveiw] = useState(
    "https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png",
  );
  const [previewList, setPreveiwList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    noOfPage: 0,
    imgURl: "",
    price: 0,
    discountedPrice: 0,
    abstract: "",
    publisher: "",
    language: "",
    ISBN: "",
    category: "",
    uploadedImages: [],
  });

  const [proPicPreveiw, setProPicPreveiw] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoiVnnWu_QbtFist_W7Hbz2V4drhwXDVyiw&s",
  );

  const onImageChange = (e) => {
    setBookData({
      ...bookData,
      uploadedImages: [...bookData.uploadedImages, e.target.files[0]],
    });
    // console.log(e.target.files[0]);
    let urlPath = URL.createObjectURL(e.target.files[0]);
    console.log(urlPath);
    setpreveiw(urlPath);
    setPreveiwList([...previewList, urlPath]);
    console.log(previewList);
  };

  const onsubmitClick = async () => {
    try {
      let reqBody = new FormData();
      for (let key in bookData) {
        if (key != "uploadedImages") {
          reqBody.append(key, bookData[key]);
        } else {
          bookData.uploadedImages.forEach((eachImg) => {
            reqBody.append("uploadedImages", eachImg);
          });
        }
      }
      let apiResponse = await addBook(reqBody);
      if (apiResponse.status == 201) {
        toast.success("succesfully Added");
        setBookData({
          title: "",
          author: "",
          noOfPage: 0,
          imgURl: "",
          price: 0,
          discountedPrice: 0,
          abstract: "",
          publisher: "",
          language: "",
          ISBN: "",
          category: "",
          uploadedImages: [],
        });
        setPreveiwList([]);
        setpreveiw(
          "https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png",
        );
      } else {
        toast.error(apiResponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const proPIcChange = (e) => {
    let urlPath = URL.createObjectURL(e.target.files[0]);
    setProPicPreveiw(urlPath);
    setUserDetails({ ...userDetails, proPic: e.target.files[0] });
  };
  const getUserData = async () => {
    try {
      let apiResponse = await getUserDetails();
      if (apiResponse.status == 200) {
        setUserDetails(apiResponse.data);
        setCurrentPassword(apiResponse.data.password);
      } else {
        toast.error(apiResponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  const onEditClick = async () => {
    try {
      if (currentPassword == currentPasswordInput) {
        //proceed to api call
        let reqBody = new FormData();
        for (const key in userDetails) {
          reqBody.append(key, userDetails[key]);
        }
        let apiResponse = await updateUser(userDetails._id, reqBody);
        if (apiResponse.status == 200) {
          toast.success("Updated");
        } else {
          toast.error(apiResponse.response.data.message);
        }

        setOpenModal(false);
      } else {
        toast.error("password mismatch");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <section>
      <Header />
      <div className="profilePicholder bg-gray-900 h-50"></div>
      <div className="profilePic">
        <img
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611746.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
        />
      </div>
      <div className="">
        <div className="pt-30 flex justify-between ps-35 pe-15 pb-5">
          <h1 className="text-4xl">{userDetails?.userName}</h1>
          <button
            onClick={() => setOpenModal(true)}
            className="text-blue-600 p-3 border rounded-2xl cursor-pointer"
          >
            <FontAwesomeIcon icon={faPenToSquare} /> Edit
          </button>
        </div>
        <div className="text-justify ps-31 pe-15 pb-3">
          <p>{userDetails?.bio}</p>
        </div>
      </div>
      <div>
        <div className="text-center p-5 ">
          <button
            onClick={() => {
              setShowSellBook(true);
              setBookStatus(false);
              setShowPurchase(false);
            }}
            className="p-3 ms-2 text-blue-600 border cursor-pointer"
          >
            Sell Book
          </button>
          <button
            onClick={() => {
              setShowSellBook(false);
              setBookStatus(true);
              setShowPurchase(false);
            }}
            className="p-3 ms-2 text-blue-600 border cursor-pointer"
          >
            Book Status
          </button>
          <button
            onClick={() => {
              setShowSellBook(false);
              setBookStatus(false);
              setShowPurchase(true);
            }}
            className="p-3 ms-2 text-blue-600 border cursor-pointer"
          >
            Purchase history
          </button>
        </div>
      </div>
      {showSellBook && (
        <div className="px-40 py-3 ">
          <div className="bg-gray-200 p-3 py-5 rounded-2xl">
            <h1 className="text-center text-2xl text-black">Book Details</h1>
            <div className="flex  justify-evenly ">
              <div className="flex flex-col gap-5 p-2">
                <input
                  className="bg-white p-3 rounded-1.5xl w-100"
                  type="text"
                  placeholder="Title"
                  onChange={(e) => {
                    setBookData({ ...bookData, title: e.target.value });
                  }}
                  value={bookData.title}
                />
                <input
                  className="bg-white p-3 rounded-1.5xl"
                  type="text"
                  placeholder="Author"
                  onChange={(e) => {
                    setBookData({ ...bookData, author: e.target.value });
                  }}
                  value={bookData.author}
                />
                <input
                  className="bg-white p-3 rounded-1.5xl"
                  type="text"
                  placeholder="No. of Pages"
                  onChange={(e) => {
                    setBookData({ ...bookData, noOfPage: e.target.value });
                  }}
                  value={bookData.noOfPage}
                />
                <input
                  className="bg-white p-3 rounded-1.5xl"
                  type="text"
                  placeholder="Image URL"
                  onChange={(e) => {
                    setBookData({ ...bookData, imgURl: e.target.value });
                  }}
                  value={bookData.imgURl}
                />
                <input
                  className="bg-white p-3 rounded-1.5xl"
                  type="text"
                  placeholder="Price"
                  onChange={(e) => {
                    setBookData({ ...bookData, price: e.target.value });
                  }}
                  value={bookData.price}
                />
                <input
                  className="bg-white p-3 rounded-1.5xl"
                  type="text"
                  placeholder="Discount Price"
                  onChange={(e) => {
                    setBookData({
                      ...bookData,
                      discountedPrice: e.target.value,
                    });
                  }}
                  value={bookData.discountedPrice}
                />
                <textarea
                  className="bg-white p-3 rounded-1.5xl"
                  placeholder="Abstract"
                  onChange={(e) => {
                    setBookData({ ...bookData, abstract: e.target.value });
                  }}
                  value={bookData.abstract}
                ></textarea>
              </div>
              <div className="flex flex-col gap-5 p-2">
                <input
                  className="bg-white p-3 rounded-1.5xl w-100"
                  placeholder="Publisher"
                  type="text"
                  onChange={(e) => {
                    setBookData({ ...bookData, publisher: e.target.value });
                  }}
                  value={bookData.publisher}
                />
                <input
                  className="bg-white p-3 rounded-1.5xl"
                  placeholder="Language"
                  type="text"
                  onChange={(e) => {
                    setBookData({ ...bookData, language: e.target.value });
                  }}
                  value={bookData.language}
                />
                <input
                  className="bg-white p-3 rounded-1.5xl"
                  placeholder="ISBN"
                  type="text"
                  onChange={(e) => {
                    setBookData({ ...bookData, ISBN: e.target.value });
                  }}
                  value={bookData.ISBN}
                />
                <input
                  className="bg-white p-3 rounded-1.5xl"
                  placeholder="Category"
                  type="text"
                  onChange={(e) => {
                    setBookData({ ...bookData, category: e.target.value });
                  }}
                  value={bookData.category}
                />
                <div className="p-3   ">
                  {previewList.length > 0 ? (
                    <div className="flex justify-center">
                      <label htmlFor="fileInp">
                        <input
                          onChange={(e) => {
                            onImageChange(e);
                          }}
                          hidden
                          disabled
                          id="fileInp"
                          type="file"
                        />
                        <img
                          className="h-45 "
                          src={preveiw}
                          alt="upload image"
                        />
                      </label>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <label htmlFor="fileInp">
                        <input
                          onChange={(e) => {
                            onImageChange(e);
                          }}
                          hidden
                          id="fileInp"
                          type="file"
                        />
                        <img
                          className="h-45 "
                          src={preveiw}
                          alt="upload image"
                        />
                      </label>
                    </div>
                  )}

                  <div className="flex justify-evenly shrink p-3">
                    {previewList.map((eachImg, i) => (
                      <img
                        key={i}
                        className="h-35 w-25 p-2"
                        src={eachImg}
                        alt=""
                      />
                    ))}

                    {previewList.length > 0 && previewList.length <= 2 && (
                      <div className=" flex items-center ">
                        <label htmlFor="img2">
                          <input
                            onChange={(e) => {
                              onImageChange(e);
                            }}
                            id="img2"
                            hidden
                            type="file"
                          />
                          <img
                            className="w-10"
                            src="https://static.thenounproject.com/png/2401816-200.png"
                            alt=""
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-end p-3">
              <button className="p-3 cursor-pointer active:bg-orange-800 bg-orange-500 ms-2 rounded-2xl text-white">
                Reset
              </button>
              <button
                onClick={onsubmitClick}
                className="p-3 cursor-pointer active:bg-green-900 bg-green-600 ms-2 rounded-2xl text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {showBookStatus && <div>show book status</div>}
      {showPurchase && <div>show purchase</div>}

      <Footer />

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Edit</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <div className="text-center p-3">
              <div className="flex text-center justify-center p-3">
                <label htmlFor="pro">
                  <img
                    className="w-50 h-50 rounded-full"
                    src={proPicPreveiw}
                    alt=""
                  />
                  <input
                    onChange={(e) => proPIcChange(e)}
                    hidden
                    type="file"
                    name=""
                    id="pro"
                  />
                </label>
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, userName: e.target.value })
                  }
                  value={userDetails?.userName}
                  type="text"
                  placeholder="Name"
                  className="w-md rounded-sm px-4 py-3 mb-2 bg-gray-300 text-gray-600"
                />
              </div>
              <div>
                <input
                  onChange={(e) => setCurrentPasswordInput(e.target.value)}
                  type="password"
                  placeholder="Current Password"
                  className="w-md rounded-sm px-4 py-3 mb-2 bg-gray-300 text-gray-600"
                />
              </div>
              <div>
                <input
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                  type="text"
                  placeholder="New Password"
                  className="w-md rounded-sm px-4 py-3 mb-2 bg-gray-300 text-gray-600"
                />
              </div>
              <div>
                <textarea
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, bio: e.target.value })
                  }
                  value={userDetails?.bio}
                  name="bio"
                  id="bio"
                  placeholder="Bio"
                  className="w-md rounded-sm px-4 py-3 mb-2 bg-gray-300 text-gray-600"
                  rows={3}
                ></textarea>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onEditClick}>Save</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>
    </section>
  );
};

export default Profile;
