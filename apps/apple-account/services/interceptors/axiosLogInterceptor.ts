import { AxiosInstance } from "axios";
import * as AxiosLogger from "axios-logger";

export const registerAxiosLogInterceptor = (instance: AxiosInstance) => {
  AxiosLogger.setGlobalConfig({
    data: undefined,
    params: true,
    prefixText: true,
  });

  instance.interceptors.request.use(
    AxiosLogger.requestLogger,
    AxiosLogger.errorLogger,
  );
  instance.interceptors.response.use(
    AxiosLogger.responseLogger,
    AxiosLogger.errorLogger,
  );
};
