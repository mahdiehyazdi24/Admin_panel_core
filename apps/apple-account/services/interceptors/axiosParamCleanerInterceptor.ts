import { cleanObj } from "@/utils";
import { AxiosInstance } from "axios";

export const registerAxiosParamCleanerInterceptor = (
  instance: AxiosInstance
) => {
  instance.interceptors.request.use((config) => {
    if (config.params) {
      config.params = cleanObj(config.params);
    }
    return config;
  });
};
