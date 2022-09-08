import React,{useState} from "react";
import './Login.css'
import { Input } from "./components/Input/Input";
import { Label } from "./components/Label/Label";
import { Title } from "./components/Title/Title";

export const Login = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  function handChange(name, value){
    if(name === 'user'){
        setUser(value)
    }else{
      if(value.length < 8){
        setPasswordError(true)
      }else{
        setPasswordError(false)
        setPassword(value)
      }
    }
  }
  function isMatch(param){
    if(param.user.length > 0 && param.password.length > 0){
      if(param.user === "admin" && param.password === "12345678"){
        const {user, password} = param;
        let ac = {user, password};
        let accountTemp = JSON.stringify(ac);
        localStorage.setItem('accountTemp',accountTemp);
        setIsLogin(true);
      }else{
        setIsLogin(false);  
      }
    }else{
      setIsLogin(false);
    }
  }

  function hadleSumit(){

    let account = {user, password}
    if(account){
      isMatch(account);   
     }


  }



  return (
    <div className="customCard">
      {isLogin ?
      <>
        <h1>Congratulations</h1>
        <Label 
        
        text='You are logged in'
        
        />
      </>
      :

    <div className="login-container">

        <Title text='¡Welcome!'/>

        <Label text='User'/>
        <Input 
          attribute={{
            id: 'user',
            name: 'user',
            type: 'text'
          }}
          handChange={handChange}
        />

        <Label text='Password'/>
        <Input 
          attribute={{
            id: 'password',
            name: 'password',
            type: 'password'
          }}
          handChange={handChange}
          param={passwordError}
        />
      <br/>
      <button onClick={hadleSumit} class="btn btn-accept">
        <i class="fa-solid fa-check"></i>
      Accept
    </button>
        
    </div>
          }
    </div>
  )
}
