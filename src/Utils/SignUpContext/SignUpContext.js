import { createContext, useState, useEffect } from "react";

const SignUpContext = createContext({});

export const SignUpProvider = ({ children }) => {
  const title = {
    0: "Lets Validate your email first",
    1: "Fill up your account information",
    2: "Create your company space",
  };

  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    email: "",
    fullName: "",
    password: "",
    companyName: "",
    space: "",
    industry: "",
    nbOfEmployees: "",
    accpetTerms: false,
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const { ...requiredData } = data;

  const canContinue =
    [...Object.values(requiredData)].every(Boolean) &&
    step === Object.keys(title).length - 1;

  return (
    <SignUpContext.Provider
      value={{ title, step, setStep, data, setData, canContinue }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export default SignUpContext;
