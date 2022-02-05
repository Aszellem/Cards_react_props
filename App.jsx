import React from "react";
import Card from "./Cards";
import contracts from "../contacts";
import Avatar from "./Avatar";

function CreateCard(contact) {
  return (
    <div>
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    </div>
  );
}

function App() {
  return (
    <div>
      <Avatar img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg/514px-Danny_DeVito_cropped_and_edited_for_brightness.jpg" />
      <h1 className="heading">Ismerősök</h1>
      <Card
        name={contracts[0].name}
        img={contracts[0].imgURL}
        tel={contracts[0].phone}
        email={contracts[0].email}
      />
      <Card
        name={contracts[1].name}
        img={contracts[1].imgURL}
        tel={contracts[1].phone}
        email={contracts[1].email}
      />
      <Card
        name={contracts[2].name}
        img={contracts[2].imgURL}
        tel={contracts[2].phone}
        email={contracts[2].email}
      />
    </div>
  );
}

export default App;
