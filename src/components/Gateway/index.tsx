/* eslint-disable @typescript-eslint/no-explicit-any */
import { GatewayContainer } from "./style";

// TODO Picture re-render
export const Gateway = (props: any) => {
  const { children } = props;

  return (
    <GatewayContainer justifyContent="center" alignItems="center">
      {children}
    </GatewayContainer>
  );
};
