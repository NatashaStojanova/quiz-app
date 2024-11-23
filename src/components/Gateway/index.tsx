/* eslint-disable @typescript-eslint/no-explicit-any */
import { GatewayWrapper } from "./style";

export const Gateway = (props: any) => {
  const { children } = props;

  return (
    <GatewayWrapper justifyContent="center" alignItems="center">
      {children}
    </GatewayWrapper>
  );
};
