import React, { useEffect, useState } from "react";
import { StyledAlert } from "../Pages/Authentication/StyleAuthentication";

const Alert = ({ message, isSuccess = false, isError = false }) => {
  const [showAlert, shouldShowAlert] = useState(false);

  useEffect(() => {
    if (isSuccess || isError) {
      shouldShowAlert(true);
      const timer = setTimeout(() => {
        shouldShowAlert(false);
        console.log("here");
      }, 5000);
    }
  }, [isSuccess, isError]);

  return (
    <div>
      {showAlert && isError && (
        <StyledAlert severity='error'>{message}</StyledAlert>
      )}
      {showAlert && isSuccess && (
        <StyledAlert severity='success'>{message}</StyledAlert>
      )}
    </div>
  );
};

export default Alert;
