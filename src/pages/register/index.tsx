import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Api from "../../services/Api";
import { toast } from "react-toastify";

import { StyledRegister } from "./StyledRegister";
import Button from "../../components/Button";

import { iRegisterModal } from "../../contexts/AuthContext";

const RegisterPage = () => {
  const navigate = useNavigate();

  const schema = yup.object({
    name: yup
      .string()
      .required("Campo obrigatório!")
      .matches(/^[a-zA-Z\s]*$/, "O nome deve conter apenas letras."),
    email: yup.string().email("E-mail inválido.").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(8, "Mínimo de 8 caracteres!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial!"
      ),

    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ),

    bio: yup.string().required("Campo obrigatório!"),
    contact: yup.string().required("Campo obrigatório!"),
    course_module: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iRegisterModal>({
    resolver: yupResolver(schema),
  });

  const registerUser = (data: iRegisterModal) => {
    delete data.confirmPassword;

    Api.post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso");
        navigate("/");
        reset();
      })
      .catch(() => toast.error("Erro ao criar usuário, verifique os dados"));
  };

  const comeBack = () => navigate(-1);

  return (
    <StyledRegister>
      <div>
        <h1>Kenzie Hub</h1>
        <Button variant="comeBack" onClick={comeBack}>
          Voltar
        </Button>
      </div>
      <div>
        <h2>Crie sua conta</h2>
        <p>Rapido e grátis, vamos nessa</p>
        <form onSubmit={handleSubmit(registerUser)}>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>

          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            placeholder="Digite aqui seu email"
            type="email"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            placeholder="Digite aqui sua senha"
            type="password"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>

          <label htmlFor="confirm-password">Confirmar Senha:</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>

          <label htmlFor="bio">Bio:</label>
          <input id="bio" placeholder="Fale sobre você" {...register("bio")} />
          <span>{errors.bio?.message}</span>

          <label htmlFor="Contato">Contato:</label>
          <input
            id="Contato"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <span>{errors.contact?.message}</span>

          <label htmlFor="module">Selecionar módulo:</label>
          <select id="module" {...register("course_module")}>
            <option value="" disabled selected>
              Selecionar módulo
            </option>
            <option value="Primeiro Módulo ">Primeiro Módulo</option>
            <option value="Segundo Módulo ">Segundo Módulo</option>
            <option value="Terceiro Módulo ">Terceiro Módulo</option>
            <option value="Quarto Módulo ">Quarto Módulo</option>
            <option value="Quinto Módulo ">Quinto Módulo</option>
            <option value="Sexto Módulo ">Sexto Módulo</option>
          </select>
          <span>{errors.course_module?.message}</span>

          <Button variant="register" type="submit">
            Register
          </Button>
        </form>
      </div>
    </StyledRegister>
  );
};

export default RegisterPage;
