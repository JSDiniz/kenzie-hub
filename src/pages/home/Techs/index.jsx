import { StyledTechs } from "./StyledTechs";
import { BiTrash } from "react-icons/bi";
import { toast } from "react-toastify";

import Api from "../../../services/Api";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

const Techs = ({ technics }) => {
  const { setCardModal } = useContext(AuthContext);

  const notify = (message) => toast(message);

  async function remove(id) {
    Api.delete(`/users/techs/${id}`)
      .then(() => {
        toast.success("Tecnologias deletado com sucesso!", notify);
      })
      .catch((err) => console.log(err));

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
