import React from "react";
import Card from "./Card";
import contacts from "../contacts";


  function createCard(contacts){
    return(
      <Card 
      key={contacts.id}
      name={contacts.name} 
      img={contacts.img} 
      phone={contacts.phone} 
      email={contacts.email}
      />
    );
  }

function App() {
  return (
    <div>
      <h1>My Contacts</h1>

      {contacts.map(createCard)}

      {/* Alternative of mapping */}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].img}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
