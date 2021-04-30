import React from "react";
import { useHistory } from "react-router-dom";
import { clearLogin } from "../../helpers";
import "./header.css";
export default function Header(props) {
  const { title } = props;

  let history = useHistory();

  const logout = () => {
    clearLogin();
    history.push("/login");
  };

  return (
    <div className="opportunity-header">
      <div className="title mb-10">
        {title}
        {
          <img
            src="/exit.png"
            alt="exit"
            className="logout-icon"
            onClick={() => logout()}
          />
        }
      </div>
    </div>
  );
}
