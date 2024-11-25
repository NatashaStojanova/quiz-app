import { Flex } from "components/Flex";

interface IGatewayProps {
  children: React.ReactNode;
}

export const Gateway = ({ children }: IGatewayProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
    >
      {children}
    </Flex>
  );
};
