import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>
        <em>{props.meaning.partOfSpeech}</em>
      </h3>
      <p>{props.meaning.definition} </p>
      <br />

      <p> {props.meaning.example}</p>
    </div>
  );
}