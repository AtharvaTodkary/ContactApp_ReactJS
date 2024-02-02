import React from "react";
import Avatar from "./Avatar";
import Para from "./Para";

function Card(props) {
  return (
    <div className="card">
      <div className="top-card">
        <h2 className="contact-name">{props.name}</h2>
        <Avatar img={props.img}/>
      </div>
      <div className="bottom-card">
        <Para paraInfo={props.phone}/>
        <Para paraInfo={props.email}/>
        <p className="phno">{props.phone}</p>
        <p className="mail">{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
