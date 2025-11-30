import { Icon } from "@repo/icons";
import React from "react";

type Props = {
  onCLick: () => void;
  show: boolean;
};

const ClearField: React.FC<Props> = ({ onCLick, show }) => {
  if (!show) return null;

  return (
    <button
      className="group flex h-6 w-6 items-center justify-center p-0 ml-1"
      onClick={onCLick}
      type="button"
    >
      <Icon
        src="Close"
        className="stroke-error size-4 transition-all duration-200 hover:rotate-12 hover:opacity-65"
      />
    </button>
  );
};

export default ClearField;
