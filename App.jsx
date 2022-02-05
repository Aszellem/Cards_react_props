import React from "react";
import Card from "./Cards";
import contracts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <Avatar img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg/514px-Danny_DeVito_cropped_and_edited_for_brightness.jpg" />
      <h1 className="heading">Ismerősök</h1>

      {contracts.map(function (contact) {
        return (
          <Card
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
          />
        );
      })}
    </div>
  );
}

export default App;
