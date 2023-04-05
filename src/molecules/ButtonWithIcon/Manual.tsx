import React from "react";

// import { ButtonWithIcon } from "../stories/molecules/ButtonWithIcon/ButtonWithIcon";
import { ManuaIcon } from "./ManuaIcon";

interface FilterButtonProps {
  onClick: () => void;
}

const Manual: React.FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <ManuaIcon
      label="Manual Order"
      icon={
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.375 12.1667H8.625V8.625H12.1667V7.375H8.625V3.83333H7.375V7.375H3.83333V8.625H7.375V12.1667ZM1.75 15.5C1.41667 15.5 1.125 15.375 0.875 15.125C0.625 14.875 0.5 14.5833 0.5 14.25V1.75C0.5 1.41667 0.625 1.125 0.875 0.875C1.125 0.625 1.41667 0.5 1.75 0.5H14.25C14.5833 0.5 14.875 0.625 15.125 0.875C15.375 1.125 15.5 1.41667 15.5 1.75V14.25C15.5 14.5833 15.375 14.875 15.125 15.125C14.875 15.375 14.5833 15.5 14.25 15.5H1.75ZM1.75 14.25H14.25V1.75H1.75V14.25ZM1.75 1.75V14.25V1.75Z"
            fill="white"
          />
        </svg>
      }
      variant="outlined"
    />
  );
};

export default Manual;
