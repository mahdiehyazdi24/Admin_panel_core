import { AxiosInstance } from "axios";
import { getClientCookies } from "../cookie";

export const registerAxiosAuthInterceptor = (instance: AxiosInstance) => {
  if (typeof window === "undefined") {
    instance.interceptors.request.use(async (req) => {
      //@ts-expect-error unhandled fetch optioins
      if (req.fetchOptions?.["no-auth"]) return req;
      // Copy all cookies from incoming request and forward them
      const cookies = await getClientCookies();
      req.headers.Cookie = cookies;
      return req;
    });
  }
};
