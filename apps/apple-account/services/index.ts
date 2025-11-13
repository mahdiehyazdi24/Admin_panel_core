import qs from "qs";
import { registerAxiosAuthInterceptor } from "./interceptors/axiosAuthInterceptor";
import { registerAxiosErrorInterceptor } from "./interceptors/axiosErrorInterceptor";
// import { registerAxiosLogInterceptor } from "./interceptors/axiosLogInterceptor";
import { registerAxiosParamCleanerInterceptor } from "./interceptors/axiosParamCleanerInterceptor";
import { ApplicationApi } from "./swagger";
import { SitemapXml } from "./swagger/SitemapXml";

const services = new ApplicationApi({
  paramsSerializer: (x) => qs.stringify(x, { arrayFormat: "repeat" }),
});

export const seo = new SitemapXml({
  paramsSerializer: (x) => qs.stringify(x, { arrayFormat: "repeat" }),
});

services.instance.interceptors.request.use((req) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  req.baseURL = baseURL;
  return req;
});

registerAxiosAuthInterceptor(services.instance);
registerAxiosParamCleanerInterceptor(services.instance);
registerAxiosErrorInterceptor(services.instance);
// registerAxiosLogInterceptor(services.instance);
// registerMock(services.instance);

export * from "./models";
export * from "./swagger";

// export * from "./socket";
export default services;
