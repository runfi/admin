import { get, post } from "@request";

//登陆
export const login = params => post("/user/login", params);
