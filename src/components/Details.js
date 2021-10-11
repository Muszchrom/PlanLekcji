import { useState } from 'react';

import sale from '../sale';

export default function Details(props) {

  const [clicked, setClicked] = useState();

  const onClick = () => {
    clicked ? setClicked(false) : setClicked(true);
  }

  return (
    <div className="details">
      <div className="details-inner">
        <button className="close-button" onClick={props.exit}></button>
        <div className="border3px">
          <h3>Lekcja: </h3>
          <p>{props.data.lekcja}</p>
          <p>{props.data.typ}</p>
          {props.data.kiedy && <p style={{margin: '1em 0'}}>{props.data.kiedy.dataPL}</p>}
        </div>
        <div className="border3px">
          <h3>Początek/Koniec: </h3>
          <p>{props.data.start} - {props.data.stop}</p>
        </div>
        <div className="border3px div-hoverable" onClick={onClick}>
          <h3>Sala: </h3>
          <p>{props.data.sala}</p>
          {clicked &&
            <div style={{display: 'flex', flexDirection: 'column', paddingBottom: '1em'}}>
            <p style={{margin: '1em 0', color: 'lightgray', fontSize: '.9em'}}>{sale[props.data.sala].budynek}</p>
            <p style={{margin: '0', color: 'lightgray', fontSize: '.9em'}}>{sale[props.data.sala].ulica}</p>
            <p style={{margin: '1em 0', color: 'lightgray', fontSize: '.9em'}}>{sale[props.data.sala].nawigacja}</p>
            </div>
          }
        </div>
        <div className="border3px">
          <h3>Wykładowca: </h3>
          <p>{props.data.wykladowca}</p>
        </div>
      </div>
    </div>
  );
}
