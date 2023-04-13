import { commonReq } from "./ApiCall";
import { BASE_URL } from "./helper";



export const registerFunc = async(data, header)=>{
    return await commonReq("POST", `${BASE_URL}/user/register`, data, header);
}