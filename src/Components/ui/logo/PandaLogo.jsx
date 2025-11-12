import Image from "next/image";
import React from "react";
import pandaLogo from "@/public/images/logo.png";

export default function PandaLogo() {
  return (
    <div className="flex justify-center w-[640px]  mb-10">
      <Image src={pandaLogo} alt="loginPageLogo" width={396} height={132} />
    </div>
  );
}
