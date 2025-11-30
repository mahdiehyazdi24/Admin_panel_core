import React from "react";
import { twMerge } from "tailwind-merge";

export interface TitleProps {
  text: string;
  description?: string;
  className?: string;
}

const Title: React.FC<React.PropsWithChildren<TitleProps>> = ({
  children,
  text,
  description,
  className,
}) => {

  return (
    <div
      className={twMerge(
        "flex flex-wrap justify-between gap-4 xl:flex-col 2xl:flex-row",
        className
      )}
    >
      <div className="xl:text-center xl:pb-3">
        <span className="text-xs font-bold text-gray-800">
          {text}
        </span>

        {description && (
          <p className="text-[10px] text-gray-600 mt-1">{description}</p>
        )}
      </div>

      {children}
    </div>
  );
};

export default Title;
