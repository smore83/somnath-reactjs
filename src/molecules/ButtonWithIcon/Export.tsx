import React from "react";
import { ExportIcon } from "./ExportIcon";
// import { ButtonWithIcon } from "../stories/molecules/ButtonWithIcon/ButtonWithIcon";

interface FilterButtonProps {
  onClick: () => void;
}

const Export: React.FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <ExportIcon
      label="Export"
      icon={
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.58331 13.6667C1.24998 13.6667 0.958313 13.5417 0.708313 13.2917C0.458313 13.0417 0.333313 12.75 0.333313 12.4167V9.43754H1.58331V12.4167H12.4166V9.43754H13.6666V12.4167C13.6666 12.75 13.5416 13.0417 13.2916 13.2917C13.0416 13.5417 12.75 13.6667 12.4166 13.6667H1.58331ZM6.99998 10.4792L2.97915 6.45837L3.87498 5.56254L6.37498 8.06254V0.333374H7.62498V8.06254L10.125 5.56254L11.0208 6.45837L6.99998 10.4792Z"
            fill="#696A6E"
          />
        </svg>
      }
      variant="outlined"
    />
  );
};

export default Export;
