import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg border-2 md:border-3 border-[rgb(203, 172, 249)] focus:outline-none"
      onClick={handleClick}
    >
      <span
        className={`relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;