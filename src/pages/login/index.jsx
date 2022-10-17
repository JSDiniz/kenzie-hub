import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { StyledLogin as TagDiv } from "./StyledLogin";
import * as yup from "yup";
import Button from "../../components/Button";

const LoginPage = () => {
  const navigate = useNavigate();

  const { registerUser } = useContext(AuthContext);

  const schema = yup.object({
    email: yup
      .string()
      .email("Deve ser um e-mail válido")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(8, "No minimo 8 caracteres")
      .required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <TagDiv>
      <h1>Kenzie Hub</h1>
      <div>
        <h2>Loging</h2>
        <form onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <Button type="submit">Loging</Button>
        </form>

        <span>Ainda não possui uma conta?</span>

        <Button variant="secondary" type="button" onClick={handleRegister}>
          Cadastre-se
        </Button>
      </div>
    </TagDiv>
  );
};

export default LoginPage;
