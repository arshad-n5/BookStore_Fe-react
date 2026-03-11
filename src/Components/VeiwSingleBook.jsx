import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import {  getSingleBook, makepayment } from "../Services/AllApi";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "flowbite-react";
import { baseUrl } from "../Services/BaseURL";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

const VeiwSingleBook = () => {
  //returns an object of key/value-pairs of the dynamic params from thr current url that were matched by the routes
  useEffect(() => {
    getSingleBookData();
  }, []);
  const { id } = useParams();
  console.log(id);
  const [singleBook, setSingleBook] = useState({});
  const getSingleBookData = async () => {
    try {
      let apiResponse = await getSingleBook(id);
      if (apiResponse.status == 200) {
        setSingleBook(apiResponse.data);
      } else [alert(apiResponse.response.data.message)];
    } catch (error) {
      console.log(error);
      alert("error occured");
    }
  };
  const [openModal, setOpenModal] = useState(false);
  const onBuyClick = async () => {
    try {
      const stripe = await loadStripe(
        "pk_test_51T966NQ1wx60g9ChrRZz8HkdbTPYnVEjWITSlvUBWRuB1h8LKKfUC5mJ4EDyrCsjHJz0oAD1jdCUL0bGij9iMBDZ00uhNSAp0C",
      );
      let apiResponse = await makepayment(singleBook._id);
      if (apiResponse.status == 200) {
        let session = apiResponse.data;
        console.log(session);
        window.location.href=session.url
      } else {
        toast.error("payment failed");
        console.log(apiResponse)
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong while doing payment");
    }
  };
  return (
    <>
      <Header />
      <>
        <div className="p-5">
          <div className="flex items-center  justify-evenly h-100 bg-gray-300">
            <div className="w-50 ">
              <img className="w-full" src={singleBook?.imgURl} alt="" />
            </div>
            <div>
              <h1 className="text-center text-4xl font-bold p-2">
                {singleBook?.title}
              </h1>
              <div className="flex justify-center gap-10">
                <div>
                  <h1>Author : {singleBook?.author}</h1>
                  <h1>Price : {singleBook?.price}</h1>
                  <h1>Number of pages : {singleBook?.price}</h1>
                  <h1>Language : {singleBook?.language}</h1>
                </div>
                <div>
                  <h1>Publisher : {singleBook?.publisher}</h1>
                  <h1>Discount Price : {singleBook?.discountedPrice}</h1>
                  <h1>ISBN : {singleBook?.ISBN}</h1>
                  <h1>Category : {singleBook?.category}</h1>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => setOpenModal(true)}
                className="p-3 bg-green-500 rounded-2xl "
              >
                More imagess
              </button>
              <div className="w-50 max-h-50 overflow-y-scroll  ">
                <h1 className="p-2">Abstract : {singleBook?.abstract}</h1>
              </div>
              <div className="flex justify-evenly gap-3 p-2">
                <button className="p-3 bg-blue-600  rounded-2xl">
                  Go back
                </button>
                <button onClick={onBuyClick} className="p-3 bg-blue-600  rounded-2xl">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <ModalHeader>Uploaded Images</ModalHeader>
          <ModalBody>
            <div className="space-y-6">
              <div className="flex justify-between">
                {singleBook?.uploadedImages?.map((eachImg) => (
                  <>
                    <img
                      className="p-2 w-50"
                      src={`${baseUrl}/Uploads/${eachImg}`}
                      alt=""
                    />
                  </>
                ))}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setOpenModal(false)}>close</Button>
          </ModalFooter>
        </Modal>
      </>
    </>
  );
};

export default VeiwSingleBook;
