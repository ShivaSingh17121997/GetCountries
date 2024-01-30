import { useContext } from "react";
import { useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authState, loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://reqres.in/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password
          }),
        });
      res = await res.json()
      console.log(res)
      // update auth
      console.log(res)
      loginUser(res.token)
      //navigate("/home");
    } catch (err) {
      console.log(`Error found:`, err)
    }
  };
  if (authState.isAuth) {
    return <Navigate to="/dashboard" />
  }

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="login-form">
        <div>
          <label>
            Email
            <input data-testid="email-input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;



const Loginfunctionlity = () => {

  const [loginData, setLogindata] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password

        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })

      res = await res.json()
      console.log(res)

    } catch (error) {
      console.log(error)
    }


  }



  return <div>
    <form onSubmit={handleSubmit} >

      <input value={loginData.email} onChange={(e) => setLogindata({ ...loginData, email: e.target.value })} type="email" /> <br />

      <input value={loginData.password} onChange={(e) => setLogindata({ ...loginData, password: e.target.value })} type="password" /> <br />

      <input type="submit" />

    </form>

  </div>

}

