import { useState } from "react";
import { AccLogin } from "../components/logins/AccLogin";
import { CodeLogin } from "../components/logins/CodeLogin";
import LoginPng from "../assets/LogPage.png"

export function LoginAcc() {
  let [wasPressed, setwasPressed] = useState(false);

  return (
    <div className="loginPage">
      <div className="loginSide">
        <h1>Login</h1>
        {wasPressed ? (
          <CodeLogin setwasPressed={setwasPressed}></CodeLogin>
        ) : (
          <AccLogin setwasPressed={setwasPressed}></AccLogin>
        )}
      </div>
      <img src={LoginPng} alt="" />
    </div>
  );
}
