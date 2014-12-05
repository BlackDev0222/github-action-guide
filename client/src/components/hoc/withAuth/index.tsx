import React from "react";
import { HeaderComponent } from "../../common";

export const withAuth = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const AuthComponent: React.FC<P> = (props: P) => {
    return (
      <HeaderComponent>
        <Component {...props} />
      </HeaderComponent>
    );
  };
  return AuthComponent;
};
