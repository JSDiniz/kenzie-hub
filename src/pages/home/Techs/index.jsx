import { StyledTechs } from "./StyledTechs";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";

import Api from "../../../services/Api";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const Techs = ({ technics }) => {
  const { setCardModal, setUserTechs } = useContext(AuthContext);

  const notify = (message) => toast(message);

  async function remove(id) {
    await Api.delete(`/users/techs/${id}`)
      .then(() => {
        toast.success("Tecnologias deletado com sucesso!", notify);
      })
      .catch((err) => console.log(err));

    const newUserTechs = await Api.get("/profile");
    setUserTechs(newUserTechs.data.techs);

    setCardModal(true);
    setCardModal(null);
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
