import { ReactNode } from "react";
import { Container } from "./Styled";

interface iButtonpros {
  variant: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
}

const Button = ({ variant, onClick, type, children }: iButtonpros) => {
  return (
    <Container variant={variant} type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
