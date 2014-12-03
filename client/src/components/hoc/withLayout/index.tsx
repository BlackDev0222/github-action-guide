import React from "react";
import { HeaderComponent } from "../../common";

export const withLayout =
  <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
  // eslint-disable-next-line react/display-name
  (props: P) => {
    return (
      <HeaderComponent>
        <Component {...props} />
      </HeaderComponent>
    );
  };
