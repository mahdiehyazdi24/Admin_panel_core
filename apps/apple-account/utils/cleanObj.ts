import _ from "lodash";

export const cleanObj = <TObject extends object>(obj: TObject | undefined) =>
  _.omitBy(
    obj,
    (value) =>
      value === undefined ||
      value === "" ||
      value === null ||
      (typeof value === "string" && value.trim() === "")
  ) as TObject;
