import React from "react";
import LoginInput from "../_components/_login/LoginInput";
import LoginBtn from "../../../components/ui/button/LoginBtn";
import PandaLogo from "../../../components/ui/logo/PandaLogo";
import EasyLogin from "../_components/_login/EasyLogin";

export default function LoginPage() {
  return (
    <section className=" p-[231px_640px_284px_650px] ">
      <div className="  h-[640px] shrink-0">
        <PandaLogo />
        <LoginInput />
        <LoginBtn />
        <EasyLogin />
      </div>
    </section>
  );
}
