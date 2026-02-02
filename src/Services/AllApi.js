import axiosConfig from "./AxiosConfig";
import { baseUrl } from "./BaseURL";

export const registerUser = async (reqBody) => {
  return await axiosConfig("post", `${baseUrl}/registerUser`, reqBody);
};
 export const loginUser=async(reqBody)=>{
    return await axiosConfig("post",`${baseUrl}/loginUser`,reqBody)
 }