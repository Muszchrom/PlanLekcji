import { useState, useEffect} from 'react';

import Details from './Details';

export default function Tile(props) {
  const [clicked, setClicked] = useState(false);

  const tydzien = (arr) => {
    if (!(Array.isArray(arr))) {
      return false;
    }
    const [start, end] = arr;
    const startDate = new Date(2021, start[0], start[1]);
    const endDate = new Date(2021, end[0], end[1]);
    const now = new Date();
    if (startDate > now) {
      return false;
    }
    if (endDate < now) {
      return false;
    }
    return true;
  }

  const dzien = (arr) => {
    if (!(Array.isArray(arr))) {
      return false;
    }
    const [month, day] = arr;
    const now = new Date();

    const dateStart = new Date(2021, month, day);
    const dateEnd = new Date(dateStart)
    dateStart.setDate(dateStart.getDate() - dateStart.getDay());
    dateEnd.setDate(dateStart.getDate() + 7);
    if (now < dateStart) {
      return false;
    }
    if (now > dateEnd) {
      return false;
    }
    return true;

  }

  const getWeek = (date) => {
    const month = date.getMonth()
    const year = date.getFullYear()
    const firstWeekday = new Date(year, month, 1).getDay()
    // if you want to start week at sunday remove that ' - 1' fragment of code
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate()
    const offsetDate = date.getDate() + firstWeekday - 1
    const index = 1
    const weeksInMonth = index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7)
    const week = index + Math.floor(offsetDate / 7)
    if (week < 2 + index) return week;
    return week === weeksInMonth ? index + 5 : week;
  }

  const isEven = (num) => {
    return num % 2 === 0 ? true : false
  }

  const onClick = () => {
    clicked ? setClicked(false) : setClicked(true);
    console.log(isEven(getWeek(new Date())));
  }

  useEffect(() => {
    return ;
  }, [clicked]);

  return (
    <div className="rotate">
      {clicked && <Details exit={onClick} data={props.lekcja}/>}
      <div className="tile" onClick={onClick}>
        <div className="tile-hours">
          <span>{props.lekcja.start}</span>
          <div className="separator"></div>
          <span>{props.lekcja.stop}</span>
        </div>
        {props.lekcja.kiedy ?
          props.lekcja.kiedy.type.parzysty === isEven(getWeek(new Date())) ?
            <div className="tile-subject care-green">{props.lekcja.lekcja}</div>
            : tydzien(props.lekcja.kiedy.type.tydzien) ?
              <div className="tile-subject care-green">{props.lekcja.lekcja}</div>
              : dzien(props.lekcja.kiedy.type.dzien) ?
                <div className="tile-subject care-green">{props.lekcja.lekcja}</div>
                : <div className="tile-subject care-red">{props.lekcja.lekcja}</div>
          : <div className="tile-subject">{props.lekcja.lekcja}</div>}
        <div className="class">{props.lekcja.sala}</div>
      </div>
    </div>
  );
}
