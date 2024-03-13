import { useState } from "react";
import LoginPng from "../assets/LogPage.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


export function RegistrAcc() {
  const navigate=useNavigate()

  let [email,setEmail]=useState("")
  let [login, setLogin] = useState("");
  let [password, setPassword] = useState("");

  async function handleRegistration() {

    try{
      const loginResult = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  await updateProfile(loginResult.user,{displayName:login})
      navigate("/main")
    }
    catch(error){
      alert(error)
    }}
    


  return (
    <div className="loginPage">
      <div className="loginSide">
        <h1>Registration</h1>
        <div className="accLogin">
          <input
            onChange={(e) => {
              setLogin(e.target.value);
            }}
            value={login}
            type="text"
            placeholder="Your Login"
          />
          <input value={email} placeholder="Your email" type="text" onChange={(e)=>{
            setEmail(e.target.value)
          }}/>

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
              handleRegistration();
              
            }}
          >
            Create Account
          </button>
          <button
            className="changeLogBtn"
            onClick={() => {
              navigate("/Login")
            }}
          >
            I have an account
          </button>
        </div>
      </div>
      <img src={LoginPng} alt="" />
    </div>
  );
          }
