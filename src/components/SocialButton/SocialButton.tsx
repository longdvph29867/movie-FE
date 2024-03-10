import React from "react";

type Props = {
  socialButton: string;
  styleSocial: React.ReactNode;
  callback?: () => void;
};

const SocialButton: React.FC<Props> = ({
  socialButton,
  styleSocial,
  callback,
}) => {
  return (
    <div
      onClick={callback}
      className="flex items-center md:justify-start justify-center gap-2.5 cursor-pointer"
    >
      <span className="w-10 h-10 flex items-center justify-center border border-[#F27221] rounded-full">
        {styleSocial}
      </span>
      <span className="text-sm">{socialButton}</span>
    </div>
  );
};

export default SocialButton;
