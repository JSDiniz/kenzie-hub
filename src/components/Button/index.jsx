import { Container } from "./Styled";

const Button = ({ variant, onClick, type, children }) => {
  return (
    <Container variant={variant} type={type} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
