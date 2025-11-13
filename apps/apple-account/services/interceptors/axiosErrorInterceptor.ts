import { AxiosError, AxiosInstance } from "axios";
import { toast } from "react-toastify";

export const registerAxiosErrorInterceptor = (instance: AxiosInstance) => {
  let timeout: NodeJS.Timeout;
  instance.interceptors.response.use(undefined, (er) => {
    //@ts-expect-error unhandled fetch optioins
    if (er instanceof AxiosError && er.config?.fetchOptions?.["no-error"])
      throw er;
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      // limit the times of error showing up in a row
      if (typeof window !== "undefined" && er instanceof AxiosError) {
        if (er.status === 500)
          toast.error("خطای داخلی لطفا کمی بعد دوباره تلاش کنید.");
        if (er.status === 504)
          toast.error(
            "عدم برقراری ارتباط با سرور. لطفا کمی بعد مجدد تلاش کنید"
          );
        if (er.status === 400) {
          if (er?.response?.data?.errors?.message) {
            toast.error(er.response.data.errors.message);
          } else toast.error("مقادیر وارد شده اشتباه هستند.");
        }
        if (er.status === 413)
          toast.error("حجم فایل آپلودی نباید بیشتر از ۵ مگابایت باشد.");
        if (er.status === 429)
          toast.error(
            "تعداد درخواست های ارسال شده بیش از حد مجاز هستن, لطفا کمی صبر کنید."
          );
        if (er.status === 401) toast.error("لطفا وارد اکانت کاربری خود شوید.");
        if (er.status === 403)
          toast.error("شما اجازه دسترسی به این بخش را ندارید.");
      }
    }, 300);
    throw er;
  });
};
