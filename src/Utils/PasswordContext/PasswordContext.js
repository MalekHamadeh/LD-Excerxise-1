import { createContext, useState, useEffect } from "react";

const PasswordContext = createContext({});

export const PasswordProvider = ({ children }) => {
  const title = {
    0: "Enter your details below",
    1: "Please enter your new password",
  };

  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    email: "",
    password: "",
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
    <PasswordContext.Provider
      value={{ title, step, setStep, data, setData, canContinue }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export default PasswordContext;
