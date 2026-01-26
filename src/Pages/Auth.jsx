import React from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Auth = ({ isFromRegister }) => {
  console.log(isFromRegister);
  return (
    <>
      <div className="loginBackground flex justify-center items-center ">
        <div className="loginOuter text-white ">
          <h1 className="text-white  text-center font-bold text-4xl">
            Book Store
          </h1>
          <div className="loginInner  bg-gray-900 w-100 p-5 h-150 rounded-3xl ">
            <div className="text-center text-3xl pt-10 flex-col ">
              <h1 className="pb-3">
                <FontAwesomeIcon icon={faUser} />
              </h1>
              {isFromRegister ? <h1>Register</h1> : <h1>Log in</h1>}
            </div>
            <div className="flex flex-col gap-5">
              {isFromRegister && (
                <input
                  className="bg-white p-3 text-black rounded-2xl"
                  type="text"
                  placeholder="User name"
                />
              )}
              <input
                className="bg-white p-3 text-black rounded-2xl"
                type="text"
                placeholder="Email"
              />
              <input
                className="bg-white p-3 text-black rounded-2xl"
                type="password"
                placeholder="Password"
              />
              <div className="pt-2 text-center ">
                <button className="bg-green-600 text-white font-bold p-3 w-89 rounded-2xl">
                  {isFromRegister ? "Register" : "Login"}
                </button>
              </div>
              <div className="text-center">
                <h1>------------------------or------------------------</h1>
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
