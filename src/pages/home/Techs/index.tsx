import { StyledTechs } from "./StyledTechs";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";

import Api from "../../../services/Api";
import { useContext } from "react";
import { AuthContext, iRegisterModal } from "../../../contexts/AuthContext";

const Techs = ({ technics }: any) => {
  const { setUserTechs } = useContext(AuthContext);

  async function remove(id: string) {
    await Api.delete<iRegisterModal>(`/users/techs/${id}`)
      .then(() => {
        toast.success("Tecnologias deletado com sucesso!");
      })
      .catch((err) => console.log(err));

    const newUserTechs = await Api.get<iRegisterModal>("/profile");
    setUserTechs(newUserTechs.data.techs);
  }

  return (
    <StyledTechs>
      <div>
        <h2>{technics.title}</h2>
      </div>
      <div>
        <p>{technics.status}</p>
        <button type="button" onClick={() => remove(technics.id)}>
          <BiTrash />
        </button>
      </div>
    </StyledTechs>
  );
};

export default Techs;
