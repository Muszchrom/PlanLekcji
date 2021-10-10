import { useState } from 'react';

export default function Info () {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    clicked ? setClicked(false) : setClicked(true);
  }

  return (
    <div>
      <div className="info" onClick={onClick}>
      </div>
      {clicked &&
        <div className="details">
          <div>
            <button className="close-button" onClick={onClick}></button>
            <p style={{margin: "1em 0"}}>Kropki przed zajęciami oznaczają dodatkowe informacje o tym kiedy dana lekcja się odbędzie</p>
            <p style={{margin: "1em 0"}}>Jeżeli kropka jest czerwona oznacza to, że danych zajęć nie będzie w danym tygodniu</p>
            <p style={{margin: "1em 0"}}>Tygodnie zaczynają sie od niedzieli a to znaczy, że w niedzielę możesz zobaczyć czy w poniedziałek dana lekcja się odbędzie</p>
          </div>
        </div>
      }
    </div>
  );
}
