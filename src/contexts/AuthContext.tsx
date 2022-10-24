// import { strict } from "assert";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../services/Api";

interface iAuthProviderProps {
  children: ReactNode;
}

export interface iRegisterModal {
  id: string;
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
  confirmPassword?: string;
}

interface UserProviderData {
  user?: iRegisterModal | null;
  userTechs: iTechProps[];
  cardModal: string | null;
  setUserTechs: (techs: any) => void;
  setCardModal: (techs: any) => void;
  registerUser: (data: iRegisterModal) => Promise<void>;
  loading: boolean;
}

export interface iTechProps {
  id: string;
  title: string;
  status: string;
}

export const AuthContext = createContext<UserProviderData>(
  {} as UserProviderData
);

const AuthProvider = ({ children }: iAuthProviderProps) => {
  const [cardModal, setCardModal] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<iRegisterModal | null>(null);
  const [userTechs, setUserTechs] = useState<iTechProps[]>([]);
  const location = useLocation();

  const navigate = useNavigate();

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
  }, []);

  async function registerUser(data: iRegisterModal) {
    try {
      const response = await Api.post("/sessions", data);
      toast.success("Login feito com sucesso!");

      const { user: userResponse, token } = response.data;

      Api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);
      setUserTechs(userResponse.techs);

      localStorage.setItem("@KenzieHub:token", token);

      const toNavigate =
        location.state?.from?.pathname ||
        `/home/${userResponse.name}/${userResponse.course_module}`;

      navigate(toNavigate, { replace: true });
    } catch (err) {
      toast.error("Confira todos os campos, você é cadastrado?");
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
