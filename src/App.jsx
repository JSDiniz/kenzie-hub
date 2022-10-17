import { ToastContainer } from "react-toastify";
import AuthProvider from "./contexts/AuthContext";
import Routes from "./routes";
import Global from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Global />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        tema="escuro"
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
