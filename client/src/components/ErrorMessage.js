import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const ErrorMessage = ({ status, title, children }) => {
  return (
    <>
      <Alert status={status}>
        <AlertIcon />
        <AlertTitle mr={2}>{title}</AlertTitle>
        <AlertDescription>{children}</AlertDescription>
      </Alert>
    </>
  );
};

export default ErrorMessage;
