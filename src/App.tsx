import { ToastContainer } from "react-toastify";
import AuthProvider from "./contexts/AuthContext";
import Routes from "./routes";
import Global from "./styles/global";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Global />
      <ToastContainer />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
