import { useNavigate, useParams, Navigate } from "react-router-dom";
import { StyledHeader, StyledMain, StyledSection } from "./StyledHome";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import RegisterModal from "../../components/RegisterModal/index";
import Button from "../../components/Button";
import Techs from "./Techs";

const HomePage = () => {
  const { user, loading, cardModal, setCardModal } = useContext(AuthContext);
  const { name, module } = useParams();
  const navigate = useNavigate();

  const exit = () => {
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:user");
    navigate("/");
  };

  if (loading) {
    return null;
  }

  function ShowModal() {
    setCardModal(true);
  }

  return (
    <>
      {user ? (
        <>
          <StyledHeader>
            <StyledSection>
              <h1>kenzie Hub</h1>
              <Button variant="comeBack" onClick={exit}>
                Sair
              </Button>
            </StyledSection>
          </StyledHeader>
          <StyledMain>
            <div>
              <StyledSection>
                <h2>Olá, {name}</h2>
                <p>{module}</p>
              </StyledSection>
            </div>
            <StyledSection>
              {cardModal && <RegisterModal />}

              <div>
                <p>Tecnologias</p>
                <button onClick={() => ShowModal()}>+</button>
              </div>

              {user.techs.length !== 0 && (
                <ul>
                  {user.techs.map((technics) => (
                    <Techs key={technics.id} technics={technics} />
                  ))}
                </ul>
              )}
            </StyledSection>
          </StyledMain>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default HomePage;
