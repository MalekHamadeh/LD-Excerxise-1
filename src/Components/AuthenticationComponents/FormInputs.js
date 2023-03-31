import React from "react";
import useSignUpContext from "../../Utils/SignUpContext/useSignUpContext";
import { imageListClasses } from "@mui/material";
import CheckEmail from "./SignUpForm/CheckEmail";
import CreateAccount from "./SignUpForm/CreateAccount";
import CompanyInformation from "./SignUpForm/CompanyInformation";

const FormInputs = ({ from }) => {
  const { step } = useSignUpContext();

  const displaySignUp = {
    0: <CheckEmail />,
    1: <CreateAccount />,
    2: <CompanyInformation />,
  };
  const displayForgot = {
    0: <div>F0</div>,
    1: <div>F1</div>,
    2: <div>F2</div>,
  };

  if (from === "signup") {
    return displaySignUp[step];
  } else if (from === "forgot") {
    return displayForgot[step];
  }
};

export default FormInputs;
