import React,{useState} from "react";
import "./Login.css";
import {auth , provider} from "../../firebase";
import {signInWithPopup} from "firebase/auth";

function Login() {

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async() =>{
      await signInWithPopup(auth, provider).then((result) =>{
        console.log(result)
      }).catch((error) => {
        console.log(error);
      })
    }


    const handlelogin = (e)=>{

        e.preventDefault();
      alert("user is not valid");
        auth.signInWithEmailAndPassword(email,password).then((auth) =>{
            console.log(auth)
        }).catch((e) => alert(e.message));

        setPassword("");
        setEmail("");
        
    }

    const handleRegister = (e)=>{

        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email,password).then((auth) =>{
        
            if(auth){
                console.log(auth)
            }
        }).catch((e) => alert(e.message))

        setPassword("");
        setEmail("");
    }



  return (
    <div className="loginpage">
      <div className="loginbox">
        <h1 className="heh1">
          A Community Based Quetions And Answer PlateForm
        </h1>
        <div className="Quote">
          <h1 className="quh1">
            For an Improved Leaning and Teaching Experience
          </h1>
        </div>
        <div className="lcontent">
          <div className="image">
            <img
              src="https://moein.video/wp-content/uploads/2021/12/QA-GIF-Quastion-and-Answer-Royalty-Free-Animated-Icon-350px-after-effects-project.gif"
              alt="GIf Image"
            />
          </div>
          <div className="lfeild">
            <form>
              <div className="login">
                <h1 id="title">Log in</h1>
                <div className="input-grp">
                  <div className="input-fld">
                    <input 
                    value={email}
                    onChange = {(e) => setEmail(e.target.value)}
                     type="text" name="email" placeholder="Email" />
                  </div>
                  <div className="input-fld">
                    <input
                      value={password}
                      onChange = {(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <p>
                    Lost Password <a href="#">Click Here!</a>
                  </p>
                </div>
              </div>
              {/* <div className="newacc">
          <h1>Create Profile</h1>
          <input type="text" name="Email" />
          <input type="password" name="Password"  />
          <button type='submit'>Sign Up</button>
          </div>  */}
              <div className="btn-fld">
                <button id="lginbtn" type="submit" onClick={handlelogin}>Login</button>
                <button id="crtaccbtn" className="disable" on onClick={handleRegister}>
                  Create Account
                </button>
              </div>
              <div className="glink">
                <div className="login_authOption">
                  <img
                    className="login_googleAuth"
                    src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                    alt=""
                  />
                  <p style={{cursor: "pointer"}} onClick={handleSubmit}>Continue With Google</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;