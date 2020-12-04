import React, { useState } from "react";
import styled from "styled-components/macro";
import DiamondImg from "../../assets/diamond.svg";
import { DiamondLine } from "../styledComponents/Lines";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/src/stylesheets/datepicker.scss";
// import "node_modules/react-datepicker/src/stylesheets/datepicker-cssmodules.scss";
// client/node_modules/react-datepicker/src/stylesheets/datepicker.scss

// const StyledDatePicker = styled(DatePicker)`
//   background-color: pink;
//   border-radius: 10px;
//   border: none;
//    {
//     background-color: pink;
//   }

//   .react-datepicker__header {
//     text-align: center;
//     background-color: pink;
//     border-bottom: 1px solid $datepicker__border-color;
//     border-top-left-radius: $datepicker__border-radius;
//     padding-top: 8px;
//     position: relative;
//   }
// `;

const ContainerWeek = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 10px 0.5rem;
`;

const Diamond = styled.div`
  background-image: url(${DiamondImg});
  height: 5.8rem;
  width: 5.8rem;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--active-color);
  text-align: center;
  padding-bottom: 5px;
`;

const TextWeek = styled.a`
  color: var(--text-color);
  padding-bottom: 1px;
  /* 1px looked more aligned with the hr line. */
`;

const WeekListItem = () => {
  const [date, setDate] = useState(new Date());
  return (
    <ContainerWeek>
      <Diamond>
        <time dateTime="11-30">
          Mo
          <br />
          30.11.
        </time>
      </Diamond>
      <DiamondLine />
      {/* <label>
        <input type="date" />
      </label> */}
      <DatePicker
        selected={date}
        onChange={(selectedDate) => setDate(selectedDate)}
        dateFormat="d.MM."
      />
      <TextWeek href="/">Geschnetzeltes</TextWeek>
    </ContainerWeek>
  );
};

export { WeekListItem };

// holt mir das aktuelle Datum+Uhrzeit:
const day = new Date();
// Array mit den Wochentagen:
const weekday = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
// Schreibt mir den aktuellen Wochentag, indem er ihn aus dem array zieht.
// getDay arbeitet mit dem Index des Arrays, wobei 0 der Sonntag ist
// dh mit day.getDay() lege ich die Stelle im Array fest, die ich ausgegeben haben will.
document.write("Today is " + weekday[day.getDay()]);
