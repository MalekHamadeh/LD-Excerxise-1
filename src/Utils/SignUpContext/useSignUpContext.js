import { useContext } from "react";
import SignUpContext from "./SignUpContext";

const useSignUpContext = () => {
  return useContext(SignUpContext);
};

export default useSignUpContext;
