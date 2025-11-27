"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  toast as ToastBase,
  ToastContent,
  ToastContentProps,
  ToastOptions,
} from "react-toastify";
type ToastType = "success" | "error" | "warning" | "info";

interface ToastProps<T> {
  type: ToastType;
  props: ToastContentProps<T>;
  content: ToastContent<T>;
}

const successIcon = (
  <svg
    className="absolute -top-6 left-5"
    width="36"
    height="35"
    viewBox="0 0 36 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.816 0C6.61416 0 -1.69494 12.3864 2.90715 23.707L4.87676 28.5456C4.96277 28.7566 4.97841 28.9899 4.92135 29.2105C4.86429 29.4312 4.73758 29.6274 4.5601 29.7701L0.395 33.1178C0.224479 33.2549 0.100644 33.4416 0.0405967 33.6522C-0.0194503 33.8627 -0.012746 34.0868 0.0597835 34.2934C0.132313 34.5 0.267089 34.679 0.445497 34.8055C0.623905 34.9321 0.837143 35 1.05576 35H17.5642C19.9853 35.0008 22.3828 34.5238 24.6198 33.5961C26.8567 32.6684 28.8893 31.3082 30.6014 29.5933C32.3134 27.8784 33.6714 25.8423 34.5977 23.6015C35.5241 21.3606 36.0006 18.9589 36 16.5335C36 7.40181 28.6113 0 19.4958 0H18.816Z"
      fill="#00635B"
    />
    <path
      d="M23.7391 14.5271C23.9084 14.3572 24.0021 14.1296 24 13.8933C23.9978 13.657 23.9001 13.431 23.7278 13.2639C23.5555 13.0969 23.3225 13.0021 23.0788 13C22.8351 12.998 22.6004 13.0888 22.4251 13.253L15.6415 19.8312L12.5749 16.8575C12.3996 16.6933 12.1649 16.6025 11.9212 16.6045C11.6775 16.6066 11.4445 16.7014 11.2722 16.8684C11.0999 17.0355 11.0022 17.2615 11 17.4978C10.9979 17.7341 11.0916 17.9617 11.2609 18.1317L14.978 21.7362C15.1522 21.9051 15.3885 22 15.6349 22C15.8814 22 16.1177 21.9051 16.2919 21.7362L23.7261 14.5271H23.7391Z"
      fill="white"
    />
  </svg>
);

const errorIcon = (
  <svg
    className="absolute -top-6 left-5"
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="35"
    viewBox="0 0 36 35"
    fill="none"
  >
    <path
      d="M18.816 0C6.61416 0 -1.69494 12.3864 2.90715 23.707L4.87676 28.5456C4.96277 28.7566 4.97841 28.9899 4.92135 29.2105C4.86429 29.4312 4.73758 29.6274 4.5601 29.7701L0.395 33.1178C0.224479 33.2549 0.100644 33.4416 0.0405967 33.6522C-0.0194503 33.8627 -0.012746 34.0868 0.0597835 34.2934C0.132313 34.5 0.267089 34.679 0.445497 34.8055C0.623905 34.9321 0.837143 35 1.05576 35H17.5642C19.9853 35.0008 22.3828 34.5238 24.6198 33.5961C26.8567 32.6684 28.8893 31.3082 30.6014 29.5933C32.3134 27.8784 33.6714 25.8423 34.5977 23.6015C35.5241 21.3606 36.0006 18.9589 36 16.5335C36 7.40181 28.6113 0 19.4958 0H18.816Z"
      fill="#AF2D2D"
    />
    <path
      d="M14 14L18 18M18 18L22 22M18 18L22 14M18 18L14 22"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const warningIcon = (
  <svg
    className="absolute -top-6 left-5"
    width="36"
    height="35"
    viewBox="0 0 36 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.816 0C6.61416 0 -1.69494 12.3864 2.90715 23.707L4.87676 28.5456C4.96277 28.7566 4.97841 28.9899 4.92135 29.2105C4.86429 29.4312 4.73758 29.6274 4.5601 29.7701L0.395 33.1178C0.224479 33.2549 0.100644 33.4416 0.0405967 33.6522C-0.0194503 33.8627 -0.012746 34.0868 0.0597835 34.2934C0.132313 34.5 0.267089 34.679 0.445497 34.8055C0.623905 34.9321 0.837143 35 1.05576 35H17.5642C19.9853 35.0008 22.3828 34.5238 24.6198 33.5961C26.8567 32.6684 28.8893 31.3082 30.6014 29.5933C32.3134 27.8784 33.6714 25.8423 34.5977 23.6015C35.5241 21.3606 36.0006 18.9589 36 16.5335C36 7.40181 28.6113 0 19.4958 0H18.816Z"
      fill="#CB571E"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 18C18.1022 18 17.7206 17.7893 17.4393 17.4142C17.158 17.0391 17 16.5304 17 16L17 9C17 8.46957 17.158 7.96086 17.4393 7.58579C17.7206 7.21071 18.1022 7 18.5 7C18.8978 7 19.2794 7.21071 19.5607 7.58579C19.842 7.96086 20 8.46957 20 9L20 16C20 16.5304 19.842 17.0391 19.5607 17.4142C19.2794 17.7893 18.8978 18 18.5 18Z"
      fill="white"
    />
    <path
      d="M17 21.5C17 21.1022 17.158 20.7206 17.4393 20.4393C17.7206 20.158 18.1022 20 18.5 20C18.8978 20 19.2794 20.158 19.5607 20.4393C19.842 20.7206 20 21.1022 20 21.5C20 21.8978 19.842 22.2794 19.5607 22.5607C19.2794 22.842 18.8978 23 18.5 23C18.1022 23 17.7206 22.842 17.4393 22.5607C17.158 22.2794 17 21.8978 17 21.5Z"
      fill="white"
    />
  </svg>
);

const infoIcon = (
  <svg
    className="absolute -top-6 left-5"
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="35"
    viewBox="0 0 36 35"
    fill="none"
  >
    <path
      d="M18.816 0C6.61416 0 -1.69494 12.3864 2.90715 23.707L4.87676 28.5456C4.96277 28.7566 4.97841 28.9899 4.92135 29.2105C4.86429 29.4312 4.73758 29.6274 4.5601 29.7701L0.395 33.1178C0.224479 33.2549 0.100644 33.4416 0.0405967 33.6522C-0.0194503 33.8627 -0.012746 34.0868 0.0597835 34.2934C0.132313 34.5 0.267089 34.679 0.445497 34.8055C0.623905 34.9321 0.837143 35 1.05576 35H17.5642C19.9853 35.0008 22.3828 34.5238 24.6198 33.5961C26.8567 32.6684 28.8893 31.3082 30.6014 29.5933C32.3134 27.8784 33.6714 25.8423 34.5977 23.6015C35.5241 21.3606 36.0006 18.9589 36 16.5335C36 7.40181 28.6113 0 19.4958 0H18.816Z"
      fill="#3667F6"
    />
    <path
      d="M14.0003 13.3108C13.9983 13.3576 14.006 13.4043 14.0231 13.448C14.0401 13.4917 14.0661 13.5316 14.0994 13.5651C14.1327 13.5986 14.1726 13.625 14.2167 13.6428C14.2608 13.6606 14.3081 13.6694 14.3558 13.6686H15.5728C15.7764 13.6686 15.9386 13.5049 15.9652 13.3065C16.098 12.3564 16.7618 11.6641 17.9448 11.6641C18.9568 11.6641 19.8832 12.1609 19.8832 13.3557C19.8832 14.2754 19.3315 14.6983 18.4597 15.3414C17.4669 16.0496 16.6806 16.8766 16.7367 18.2191L16.7411 18.5334C16.7427 18.6284 16.7822 18.7191 16.8512 18.7857C16.9202 18.8524 17.0131 18.8897 17.1099 18.8897H18.3062C18.4041 18.8897 18.4979 18.8516 18.567 18.7837C18.6362 18.7158 18.675 18.6237 18.675 18.5276V18.3756C18.675 17.3357 19.0777 17.033 20.1649 16.2234C21.0633 15.5528 22 14.8084 22 13.2457C22 11.0573 20.1177 10 18.0569 10C16.1879 10 14.1405 10.8545 14.0003 13.3108ZM16.2971 21.6574C16.2971 22.4294 16.924 23 17.787 23C18.6854 23 19.3034 22.4294 19.3034 21.6574C19.3034 20.858 18.6839 20.296 17.7855 20.296C16.924 20.296 16.2971 20.858 16.2971 21.6574Z"
      fill="white"
    />
  </svg>
);

const typeMap: Record<ToastType, [[string, string], string, React.ReactNode]> =
{
  success: [["#439E77", "#00635B"], "موفق", successIcon],
  error: [["#F05455", "#AF2D2D"], "خطا !", errorIcon],
  warning: [["#FCA651", "#CB571E"], "هشدار!", warningIcon],
  info: [["#99ACE5", "#3667F6"], "توجه!", infoIcon],
};

const AppleIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="35"
    viewBox="0 0 29 36"
    fill="black"
    {...props}
  >
    <path d="M28.0765 11.9302C26.912 12.6307 25.9474 13.6099 25.2731 14.7763C24.5987 15.9427 24.2365 17.2582 24.2205 18.5995C24.2251 20.1092 24.6804 21.5844 25.53 22.8424C26.3795 24.1004 27.586 25.0859 29 25.6769C28.4425 27.444 27.6174 29.1187 26.5525 30.6446C25.0287 32.7997 23.4354 34.9545 21.0111 34.9545C18.5869 34.9545 17.9634 33.5708 15.1696 33.5708C12.4451 33.5708 11.4753 35 9.25867 35C7.04209 35 5.49529 33.0037 3.71733 30.5539C1.36878 27.1219 0.0780438 23.0971 0 18.9623C0 12.1571 4.50247 8.55046 8.93541 8.55046C11.2906 8.55046 13.2532 10.0701 14.7309 10.0701C16.1394 10.0701 18.3329 8.45953 21.0111 8.45953C22.3882 8.42463 23.7528 8.72292 24.9849 9.32815C26.217 9.93338 27.2787 10.827 28.0765 11.9302ZM19.7413 5.57877C20.9219 4.21431 21.5903 2.49316 21.6346 0.702837C21.6366 0.466821 21.6134 0.231251 21.5653 0C19.5373 0.194628 17.662 1.14425 16.324 2.65409C15.132 3.96419 14.4385 5.63937 14.3614 7.39495C14.3623 7.60845 14.3855 7.8213 14.4307 8.03014C14.5906 8.05983 14.7529 8.07505 14.9156 8.0756C15.8502 8.00254 16.76 7.74352 17.5896 7.3143C18.4192 6.88507 19.1512 6.2946 19.7413 5.57877Z" />
  </svg>
);

const CloseIcon = (props: React.ComponentProps<"svg">) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#E44061"
    id="Layer_1"
    version="1.1"
    viewBox="0 0 612 792"
    {...props}
  >
    <g>
      <polygon
        className="st0"
        points="382.2,396.4 560.8,217.8 484,141 305.4,319.6 126.8,141 50,217.8 228.6,396.4 50,575 126.8,651.8    305.4,473.2 484,651.8 560.8,575 382.2,396.4  "
      />
    </g>
  </svg>
);

const BaseToast = <T,>({ type, content, props }: ToastProps<T>) => {
  const [[backgroundColor, fill], title, icon] = typeMap[type];

  const [progress, setProgress] = useState(100); // in %
  const startTimeRef = useRef<number | null>(null);
  const elapsedRef = useRef(0);
  const requestRef = useRef<number | null>(null);
  const duration = 1500; // ms

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;

    const elapsed = timestamp - startTimeRef.current + elapsedRef.current;
    const percentage = Math.max(100 - (elapsed / duration) * 100, 0);
    setProgress(percentage);

    if (elapsed < duration) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (!props.isPaused) {
      requestRef.current = requestAnimationFrame(animate);
    } else {
      // Pause: cancel and store elapsed time
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
        if (startTimeRef.current !== null) {
          elapsedRef.current += performance.now() - startTimeRef.current;
        }
        startTimeRef.current = null;
      }
    }

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [props.isPaused]);

  const renderContent = () => {
    if (typeof content === "function") return content(props);
    return content;
  };

  props.isPaused;

  return (
    <div
      style={{ backgroundColor, borderRadius: "20px" }}
      className="relative md:min-h-[78px] min-h-[60px] w-full p-3 pl-8 pr-12 shadow-lg !w-[250px] md:!w-full"
    >
      <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full">
        <CloseIcon className="h-4 w-4 fill-white" />
      </div>
      <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-lg">
        <AppleIcon
          style={{ fill }}
          className="absolute -bottom-4 -left-5 md:size-20 size-16"
        />
      </div>
      {icon}
      <div className="relative">
        <h3 className="md:text-base font-black text-white text-sm">{title}</h3>
        <div className="md:text-xs text-[12px] font-bold text-white/80">{renderContent()}</div>
      </div>
      <div className="absolute bottom-0 left-0 flex h-5 w-full items-end overflow-hidden rounded-b-[20px]">
        <div className="flex h-1 w-full bg-white/80">
          <div
            style={{
              backgroundColor,
              opacity: 0.5,
              width: `${progress}%`,
              transition: props.isPaused ? "none" : "width 0.05s linear",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const createToastMessage = (type: ToastType) => {
  return <TData,>(
    content: ToastContent<TData>,
    options?: ToastOptions<TData>,
  ) =>
    ToastBase<TData>(
      props => <BaseToast type={type} content={content} props={props}/>,
      {
        autoClose: 1500, 
        ...options,
      },

    );
};

const Components = {
  success: createToastMessage("success"),
  error: createToastMessage("error"),
  warn: createToastMessage("warning"),
  info: createToastMessage("info"),
};

export default Components;
