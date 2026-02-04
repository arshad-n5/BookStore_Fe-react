import React, { useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { googleLogin, loginUser, registerUser } from "../Services/AllApi";
import { jwtDecode } from "jwt-decode";

const Auth = ({ isFromRegister }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const registerUserData = async () => {
    try {
      if (
        userData.userName == "" ||
        userData.email == "" ||
        userData.password == ""
      ) {
        alert("please fill the form");
      } else {
        let apiResponse = await registerUser(userData);
        if (apiResponse.status == 201) {
          alert("user registered Succesfully");
          setUserData({
            userName: "",
            email: "",
            password: "",
          });
          navigate("/login");
        } else {
          alert(apiResponse.response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      alert("error occured while editing");
    }
  };

  const loginUserData = async () => {
    try {
      if (userData.email == "" || userData.password == "") {
        alert("please fill the form");
      } else {
        let apiResponse = await loginUser(userData);
        console.log(apiResponse);
        if (apiResponse.status == 200) {
          let token = apiResponse.data.token;
          localStorage.setItem("token", token);
          alert("succesfully logged in");
          setUserData({
            email: "",
            password: "",
          });
          navigate("/");
        } else {
          alert(apiResponse.response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const decodeToken = async (googleToken) => {
    //console.log(googleToken);
    const decoded = jwtDecode(googleToken);
    //console.log(decoded);
    let userName = decoded.name;
    let email = decoded.email;
    let proPic = decoded.picture;
    let payLoad = {
      userName,
      email,
      proPic,
    };
    let apiResponse = await googleLogin(payLoad);
    if (apiResponse.status == 200) {
      let token = apiResponse.data.token;
      localStorage.setItem("token", token);
      alert("logged in succesfully");
      navigate("/");
    } else {
      alert(apiResponse.response.data.message);
    }
  };

  return (
    <>
      <div className="loginBackground flex justify-center items-center ">
        <div className="loginOuter text-white ">
          <h1 className="text-white  text-center font-bold text-4xl">
            Book Store
          </h1>
          <div className="loginInner  bg-gray-900 w-100 p-5 h-170 rounded-3xl ">
            <div className="text-center text-3xl pt-10 flex-col ">
              <h1 className="pb-3">
                <FontAwesomeIcon icon={faUser} />
              </h1>
              {isFromRegister ? <h1>Register</h1> : <h1>Log in</h1>}
            </div>
            <div className="flex flex-col gap-5">
              {isFromRegister && (
                <input
                  onChange={(e) => {
                    setUserData({ ...userData, userName: e.target.value });
                  }}
                  value={userData.userName}
                  className="bg-white p-3 text-black rounded-2xl"
                  type="text"
                  placeholder="User name"
                />
              )}
              <input
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
                value={userData.email}
                className="bg-white p-3 text-black rounded-2xl"
                type="text"
                placeholder="Email"
              />
              <input
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
                value={userData.password}
                className="bg-white p-3 text-black rounded-2xl"
                type="password"
                placeholder="Password"
              />
              <div className="pt-2 text-center ">
                {isFromRegister ? (
                  <button
                    onClick={registerUserData}
                    className="bg-green-600 text-white font-bold p-3 w-89 rounded-2xl cursor-pointer"
                  >
                    Register
                  </button>
                ) : (
                  <button
                    onClick={loginUserData}
                    className="bg-green-600 text-white font-bold p-3 w-89 rounded-2xl cursor-pointer"
                  >
                    Log In
                  </button>
                )}
              </div>
              <div className="text-center">
                <h1>------------------------or------------------------</h1>
                <div className="p-3">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      decodeToken(credentialResponse.credential);
                    }}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
                {isFromRegister ? (
                  <h1>
                    {" "}
                    Are you a New User ?{" "}
                    <Link className="text-blue-500" to={"/login"}>
                      Log in
                    </Link>
                  </h1>
                ) : (
                  <h1>
                    Are you a New User ?{" "}
                    <Link className="text-blue-500" to={"/register"}>
                      Register
                    </Link>
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
