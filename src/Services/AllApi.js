import axiosConfig from "./AxiosConfig";
import { baseUrl } from "./BaseURL";

const appendToken = () => {
  let token = localStorage.getItem("token");
  let header = {
    Authorization: `Bearer ${token}`,
  };
  return header;
};

const appendTokenWithMult = () => {
  let token = localStorage.getItem("token");
  let header = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "multipart/form-data",
  };
  return header;
};

export const registerUser = async (reqBody) => {
  return await axiosConfig("post", `${baseUrl}/registerUser`, reqBody);
};
export const loginUser = async (reqBody) => {
  return await axiosConfig("post", `${baseUrl}/loginUser`, reqBody);
};
export const googleLogin = async (reqBody) => {
  return await axiosConfig("post", `${baseUrl}/googleLogin`, reqBody);
};
export const addBook = async (reqBody) => {
  return await axiosConfig(
    "post",
    `${baseUrl}/addBook`,
    reqBody,
    appendTokenWithMult(),
  );
};

export const getLimitedBooks = async () => {
  return await axiosConfig("get", `${baseUrl}/getLimitedBooks`);
};

export const getAllBooks = async (searchKey) => {
  return await axiosConfig(
    "get",
    `${baseUrl}/getAllBooks/?searchKey=${searchKey}`,
    "",
    appendToken(),
  );
};
