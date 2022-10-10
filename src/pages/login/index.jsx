import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { StyledLogin as TagDiv } from "./StyledLogin";
import Button from "../../components/Button";
import Api from "../../services/Api";
import { toast } from "react-toastify";

const LoginPage = () => {
  // console.log(authenticated);

  const navigate = useNavigate();
  // const token = localStorage.getItem("@KenzieHub:token") || "";

  const notify = (message) => toast(message);

  const schema = yup.object({
    email: yup
      .string()
      .email("Deve ser um e-mail válido")
      .required("Email é obrigatório"),
    password: yup
      .string()
      .min(6, "No minimo 6 caracteres")
      .required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function registerUser(data) {
    Api.post("/sessions", data)
      .then((res) => {
        const { token } = res.data;
        const { id, name, course_module } = res.data.user;
        toast.success("Login feito com sucesso", notify);
        localStorage.setItem("@KenzieHub:token", token);
        localStorage.setItem("@KenzieHub:user", id);

        navigate(`/Home/${name}/${course_module}`);
        reset();
      })
      .catch(() =>
        toast.error("Confira todos os campos, você é cadastrado?", notify)
      );
  }

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
          Loging
        </Button>
      </div>
    </TagDiv>
  );
};

export default LoginPage;
