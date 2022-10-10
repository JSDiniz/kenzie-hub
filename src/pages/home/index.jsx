import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { StyledHeader, StyledSection } from "./StyledHome";
import { StyledMain } from "./StyledHome";

const HomePage = () => {
  const { name, module } = useParams();

  const navigate = useNavigate();

  const exit = () => {
    localStorage.removeItem("@KenzieHub:token");
    localStorage.removeItem("@KenzieHub:user");
    navigate("/");
  };

  return (
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
          <h2>Que pena! Estamos em desenvolvimento :(</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </StyledSection>
      </StyledMain>
    </>
  );
};

export default HomePage;
