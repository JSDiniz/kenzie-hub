import { AuthContext, UserProviderData } from "../../contexts/AuthContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { StyledModal } from "./StyledModal";

import Api from "../../services/Api";

const RegisterModal = () => {
  const { setCardModal, setUserTechs } = useContext(AuthContext);

  function closeModal() {
    setCardModal(null);
  }

  const { register, handleSubmit } = useForm();

  async function registerUser<iRegisterModal>(
    data: iRegisterModal
  ): Promise<void> {
    await Api.post<iRegisterModal>("/users/techs", data)
      .then(() => {
        toast.success("Tecnologias cadastrado com sucesso");
      })
      .catch(() => {
        toast.error(
          "Usuário Já tem esta tecnologia criada, você só pode atualizá-la"
        );
      });

    const { data: newData } = await Api.get<UserProviderData>("/profile");

    setUserTechs(newData.techs);

    setCardModal(null);
  }

  return (
    <StyledModal>
      <div className="box">
        <p>Cadastrar Tecnologia</p>
        <button onClick={() => closeModal()}>X</button>
      </div>
      <form className="form" onSubmit={handleSubmit(registerUser)}>
        <label htmlFor="some">Nome</label>
        <input
          id="some"
          type="text"
          placeholder="Nome"
          {...register("title")}
        />

        <label htmlFor="status">Selecionar status</label>
        <select id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">Cadastrar Tecnologia</button>
      </form>
    </StyledModal>
  );
};

export default RegisterModal;
