import React, { useContext } from "react";
import { imageListClasses } from "@mui/material";
import CheckEmail from "./SignUpForm/CheckEmail";
import CreateAccount from "./SignUpForm/CreateAccount";
import CompanyInformation from "./SignUpForm/CompanyInformation";
import NewPassword from "./PasswordForm/NewPassword";
import SignUpContext from "../../Utils/SignUpContext/SignUpContext";
import PasswordContext from "../../Utils/PasswordContext/PasswordContext";

const FormInputs = ({ from }) => {
  const { step: stepSignUp } = useContext(SignUpContext);
  const { step: stepForgot } = useContext(PasswordContext);

  const displaySignUp = {
    0: <CheckEmail />,
    1: <CreateAccount />,
    2: <CompanyInformation />,
  };
  const displayForgot = {
    0: <CheckEmail />,
    1: <NewPassword />,
  };

  if (from === "signup") {
    return displaySignUp[stepSignUp];
  } else if (from === "forgot") {
    return displayForgot[stepForgot];
  }
};

export default FormInputs;
