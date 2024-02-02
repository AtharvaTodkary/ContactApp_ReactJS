import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top-card">
        <h2 className="contact-name">{props.name}</h2>
        <Avatar img={props.img}/>
      </div>
      <div className="bottom-card">
        <p className="phno">{props.phone}</p>
        <p className="mail">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
