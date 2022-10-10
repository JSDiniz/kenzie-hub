import Routes from "./routes";
import Global from "./styles/global";
import { ToastContainer } from "react-toastify";

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
      <Routes />
    </>
  );
};

export default App;
