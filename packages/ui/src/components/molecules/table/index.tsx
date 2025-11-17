"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { TableProps } from "./type";

const Table: React.FC<TableProps> = ({
  className = "",
  headers,
  rows,
  colSpan = [],
  limitedHeight = "",
  mini = false,
}) => {
  const cols =
    colSpan.length > 0
      ? colSpan.reduce((acc, item) => acc + item, 0)
      : headers.length;

  if (rows.length > 0 && headers.length !== Object.keys(rows[0] || {}).length)
    throw new Error("The row items don`t match the headers count.");

  return (
    <>
      {headers.length > 0 && (
        <div className={twMerge("flex w-full flex-col", className)}>
          {/* Header */}
          <div className={`grid ${getGridColsClass(cols)}`}>
            {headers.map((header, index) => (
              <div
                className={getHeaderClasses(index, colSpan, mini)}
                key={`header-${index}`}
              >
                {header}
              </div>
            ))}
          </div>
          {/* Body */}
          <div
            className={`grid ${getGridColsClass(cols)} ${
              limitedHeight ? `${limitedHeight} overflow-y-scroll` : ""
            }`}
          >
            {rows.length === 0 ? (
              <p className="col-span-full p-2 text-center">
                داده ای برای نمایش وجود ندارد
              </p>
            ) : (
              rows.map((row, rowIndex) => (
                <React.Fragment key={`row-${rowIndex}`}>
                  {Object.keys(row).map((key, keyIndex) => (
                    <div
                      className={getCellClasses(
                        rowIndex,
                        keyIndex,
                        row,
                        colSpan,
                        mini
                      )}
                      key={`cell-${rowIndex}-${keyIndex}`}
                    >
                      {typeof row[key] !== "undefined" ? row[key] : "-"}
                    </div>
                  ))}
                </React.Fragment>
              ))
            )}
          </div>
        </div>
      )}
    </>
  );
};

const handleRowStyles = (rowIndex: number, mini: boolean) =>
  !mini && rowIndex % 2 !== 0 ? "bg-primary/15" : "bg-white";

const handleBorderRadius = (
  index: number,
  row: { [key: string]: React.ReactNode }
) => {
  if (index === 0) return "rounded-r-xs";
  if (index === Object.keys(row).length - 1) return "rounded-l-xs";
  return "";
};

const getHeaderClasses = (index: number, colSpan: number[], mini: boolean) => {
  return `${
    mini ? "text-2xs md:text-xs py-2" : "text-xs md:text-sm py-4"
  } text-center text-gray-200 font-bold px-2  flex justify-center items-center ${
    colSpan[index] ? `col-span-${colSpan[index]}` : ""
  }`;
};

const getCellClasses = (
  rowIndex: number,
  keyIndex: number,
  row: { [key: string]: React.ReactNode },
  colSpan: number[],
  mini: boolean
) => {
  return `
    ${handleRowStyles(rowIndex, mini)} 
    ${handleBorderRadius(keyIndex, row)} 
    ${colSpan[keyIndex] ? getGridCellsClass(colSpan[keyIndex]) : ""} 
    ${mini ? "text-2xs" : "text-xs"}
    p-2 flex text-center justify-center items-center text-gray-200
  `;
};

const getGridColsClass = (numCols: number) => {
  switch (numCols) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    case 5:
      return "grid-cols-5";
    case 6:
      return "grid-cols-6";
    case 7:
      return "grid-cols-7";
    case 8:
      return "grid-cols-8";
    case 9:
      return "grid-cols-9";
    case 10:
      return "grid-cols-10";
    case 11:
      return "grid-cols-11";
    case 12:
      return "grid-cols-12";
    default:
      return "";
  }
};

const getGridCellsClass = (colSpan: number) => {
  switch (colSpan) {
    case 1:
      return "col-span-1";
    case 2:
      return "col-span-2";
    case 3:
      return "col-span-3";
    case 4:
      return "col-span-4";
    case 5:
      return "col-span-5";
    case 6:
      return "col-span-6";
    case 7:
      return "col-span-7";
    case 8:
      return "col-span-8";
    case 9:
      return "col-span-9";
    case 10:
      return "col-span-10";
    case 11:
      return "col-span-11";
    case 12:
      return "col-span-12";
    default:
      return "";
  }
};

export default Table;
