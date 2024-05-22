import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

export function AccLogin(props) {
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(){
    try{
      await signInWithEmailAndPassword(auth,login,password)
      navigate("/main")
    } catch(error){
      alert(error)
    }
   
  }

  return (
    <div className="accLogin">
      <input
        onChange={(e) => {
          setLogin(e.target.value);
        }}
        value={login}
        type="text"
        placeholder="Your Login"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        type="text"
        placeholder="Your password"
      />
      <button
        className="enterBtn"
        onClick={() => {
          console.log(login, password);
          handleLogin();
        }}
      >
        Enter
      </button>
      <button
        className="changeLogBtn"
        onClick={() => {
          navigate("/");
        }}
      >
        Registration
      </button>
      <button
        className="changeLogBtn"
        onClick={() => {
          props.setwasPressed(true);
        }}
      >
        I have a code
      </button>
    </div>
  );
}
