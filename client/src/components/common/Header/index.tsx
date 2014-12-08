import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../../constants";

type Props = {
  children?: React.ReactNode;
};

export const HeaderComponent: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>
        <Link to={PATH.AUTH.SIGNIN}>Sign In</Link>
        <Link to={PATH.AUTH.SIGNUP}>Sign Up</Link>
      </div>
      {children}
    </>
  );
};
