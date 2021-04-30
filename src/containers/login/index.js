import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { verifyUser, setIsLogin } from "../../helpers";
import "./login.css";

export default function Login() {
  let history = useHistory();

  const [form, setForm] = useState({ user: "", password: "" });

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!verifyUser(form)) {
      setError("Incorrect Credentials");
    } else {
      setIsLogin(true);
      history.push("/home");
    }
  };

  return (
    <div>
      <form className="loginForm">
        <div className="loginName">Login</div>
        <div className="form-label-group">
          <input
            type="user"
            name="user"
            className="form-control"
            id="inputEmail"
            placeholder="Username"
            value={form.user}
            onChange={(event) => setForm({ ...form, user: event.target.value })}
          />
          <label for="inputEmail">EMAIL ADDRESS</label>
        </div>

        <div className="form-label-group">
          <input
            // type={this.state.type}
            name="password"
            className="form-control"
            placeholder="password"
            id="password"
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
          />
          <label for="password">PASSWORD</label>
        </div>
        <div className>{error}</div>
        <button
          type="button"
          onClick={handleSubmit}
          className="btn btn-success btn-lg form-control font-weight-bold loginBtn"
        >
          Login
        </button>
      </form>
    </div>
  );
}
