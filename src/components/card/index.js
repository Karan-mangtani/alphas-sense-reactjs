import React from "react";
import "./card.css";
export default function card({ item }) {
  return (
    <div className="card mb-10">
      <div className="row mb-10 w-100">
        <div className="name col w-50 text-left">
          <div className="row">
            <img className="profile" src={item.pic} alt={item.name} />
            {item.name}
          </div>
        </div>
        <div className="details col w-50 text-right">{item.gender}</div>
      </div>
      <div className="row mb-10 w-100">
        <div className="details col w-50 text-left">{item.dob}</div>
        <div className="details col w-50 text-right">{item.occupation}</div>
      </div>
    </div>
  );
}
