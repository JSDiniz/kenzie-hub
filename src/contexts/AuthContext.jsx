import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../services/Api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [cardModal, setCardModal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userTechs, setUserTechs] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();
  const notify = () => toast();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@KenzieHub:token");

      if (token) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await Api.get("/profile");

          setUser(data);
          setUserTechs(data.techs);
          // Quando uso o defaults.headers estou falando que em todo lugar da minha aplicação que ela chamar a api, ele já vai chamar o token automaticamente para todas as requisições que for utilizar
        } catch (err) {
          console.error(err);
        }
      }
      setLoading(false);
    }

    loadUser();
  }, [cardModal]);

  async function registerUser(data) {
    try {
      const response = await Api.post("/sessions", data);
      toast.success("Login feito com sucesso!", notify);

      const { user: userResponse, token } = response.data;

      Api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);

      localStorage.setItem("@KenzieHub:token", token);

      const toNavigate =
        location.state?.from?.pathname ||
        `/home/${userResponse.name}/${userResponse.course_module}`;

      navigate(toNavigate, { replace: true });
    } catch (err) {
      toast.error("Confira todos os campos, você é cadastrado?", notify);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        user,
        loading,
        cardModal,
        setCardModal,
        userTechs,
        setUserTechs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
