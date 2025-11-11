import React from "react";
import PandaLogo from "../../../components/ui/logo/PandaLogo";
import SignInput from "../_components/_signup/Signp";
import EasySignup from "../_components/_signup/EasySignup";

export default function SignUpPage() {
  return (
    <section>
      <div>
        <PandaLogo />
        <SignInput />
        <EasySignup />
      </div>
    </section>
  );
}
