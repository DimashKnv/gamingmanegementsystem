import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { LoginAcc } from "./pages/Login";
import { RegistrAcc } from "./pages/Registr";
import { Main } from "./pages/Main";
import { Tarif } from "./components/Tarif";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegistrAcc></RegistrAcc>}></Route>
        <Route path="/Login" element={<LoginAcc></LoginAcc>}></Route>
        <Route path="/main" element={<Main></Main>}></Route>
      </Routes>
    </div>
  );
}

export default App;
