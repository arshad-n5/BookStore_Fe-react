import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminSideBar from "./AdminSideBar";
import { toast } from "react-toastify";
import { getUserDetails, updateUser } from "../../Services/AllApi";
import { baseUrl } from "../../Services/BaseURL";

const AdminSettings = () => {
  useEffect(() => {
    getData();
  }, []);
  const [preview, setPreveiw] = useState(
    "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg",
  );
  const [userData, setUserData] = useState({
    userName: "",
    password: "",
    proPic: "",
  });
  const [existingPass, setExistingPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const onImageChange = (e) => {
    let file = e.target.files[0];
    setPreveiw(URL.createObjectURL(file));
    setUserData({ ...userData, proPic: file });
  };

  const getData = async () => {
    try {
      let apiResponse = await getUserDetails();
      if (apiResponse.status == 200) {
        setUserData(apiResponse.data);
        let prevData=apiResponse.data.proPic
        if(prevData.length>0){
             setPreveiw(`${baseUrl}/Uploads/${prevData}`);
        }
      } else {
        toast.error(apiResponse.response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };
  const onSubmitClick = async () => {
    try {
      if (existingPass == userData.password) {
        delete userData.password;
        let reqBody = new FormData();
        for (const key in userData) {
          reqBody.append(key, userData[key]);
        }
        reqBody.append("password", newPass);
        let apiResponse = await updateUser(userData._id, reqBody);
        if (apiResponse.status == 200) {
            getData()
         
          toast.success("Updated succesfully");
        } else {
          toast.error("error occured while updating");
        }
      } else {
        toast.error("password mismatch");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div>
      <AdminHeader />

      <div className="grid grid-cols-[1fr_3fr]">
        <AdminSideBar />

        <div className="flex justify-center">
          <div className="  bg-gray-900 w-130 h-130 rounded-2xl my-5 ">
            <div className="flex justify-center my-8">
              <label htmlFor="profPic">
                <img className="w-30 h-45 rounded-full" src={preview} alt="" />
                <input
                  onClick={(e) => {
                    onImageChange(e);
                  }}
                  type="file"
                  id="profPic"
                  hidden
                />
              </label>
            </div>
            <div className="flex justify-center flex-col items-center my-5">
              <input
                onChange={(e) =>
                  setUserData({ ...userData, userName: e.target.value })
                }
                value={userData?.userName}
                className="bg-white w-90 py-3 ps-3 rounded-xl"
                placeholder="User Name"
                type="text"
              />
              <input
                onChange={(e) => setExistingPass(e.target.value)}
                className="bg-white w-90 py-3 ps-3 rounded-xl mt-5"
                placeholder="Password"
                type="password"
              />
              <input
                onChange={(e) => setNewPass(e.target.value)}
                className="bg-white w-90 py-3 ps-3 rounded-xl mt-5"
                placeholder="New Password"
                type="password"
              />
            </div>
            <div className="text-center">
              <button
                onClick={onSubmitClick}
                className="bg-white p-3 text-black rounded-2xl active:bg-gray-300 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
