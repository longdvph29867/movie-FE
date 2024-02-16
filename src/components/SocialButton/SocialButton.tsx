import React from "react";

type Props = {
  socialButton?: string;
  styleSocial?: React.ReactNode;
};

const SocialButton: React.FC<Props> = ({ socialButton, styleSocial }) => {
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-10 h-10 flex items-center justify-center border border-[#F27221] rounded-full">
        {styleSocial}
      </span>
      <span className="text-sm">{socialButton}</span>
    </div>
  );
};

export default SocialButton;
