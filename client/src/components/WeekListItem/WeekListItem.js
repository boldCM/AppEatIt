import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import DiamondImg from "../../assets/diamond.svg";
import { DiamondLine } from "../styledComponents/Lines";
import DatePicker from "react-datepicker";
import "./DatePicker.css";
import { registerLocale } from "react-datepicker";
import de from "date-fns/locale/de";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getWeek, updateWeekByDate } from "../../api/connectJSON";
registerLocale("de", de);

const StyledDatePicker = styled(DatePicker)`
  border: none;
  background: transparent;
  color: var(--active-color);
  text-align: center;
  font-family: "Encode Sans", sans-serif;
  font-size: 16px;
  font-weight: 300;
  :focus {
    outline: none;
  }
`;

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--active-color);
  text-align: center;
  padding-bottom: 5px;
`;

const TextWeek = styled(Link)`
  color: var(--text-color);
  padding-bottom: 1px;
  /* 1px looked more aligned with the hr line. */
`;

const WeekListItem = ({ RecipeName, Id, ChosenDate }) => {
  const parseDate = Date.parse(ChosenDate);
  console.log(parseDate);
  // const [date, setDate] = useState(new Date());
  const [date, setDate] = useState(parseDate);
  console.log(ChosenDate);
  console.log(new Date());
  // setDate(ChosenDate);
  // das Time-Value scheint nicht für die Formatierung in z.58 zupassen

  // das heißt ich muss die formatierte Version abspeichern und jedes Mal, wenn sich das date ändern, muss die Formatierung drüber laufen ?

  const getWeekDay = (date) => {
    return new Intl.DateTimeFormat("de-DE", { weekday: "short" }).format(date);
  };

  // wenn das Date gesetzt wird, will ich es automatisch in meiner db.json haben.
  // und dann den initial date aus der db.json holen statt useState(newDate())-> s. state für Icons...

  const fetchData = async (selectedDate) => {
    await updateWeekByDate(selectedDate, Id);
  };

  const handleOnChange = (selectedDate) => {
    setDate(selectedDate);
    fetchData(selectedDate);
  };

  return (
    <ContainerWeek>
      <Diamond>
        <div>{getWeekDay(date)}</div>
        <StyledDatePicker
          selected={date}
          // onChange={(selectedDate) => setDate(selectedDate)}
          dateFormat="dd.MM."
          locale="de"
          onChange={(selected) => handleOnChange(selected)}
        />
      </Diamond>
      <DiamondLine />
      <TextWeek to={`${RecipeName}`}>{RecipeName}</TextWeek>
    </ContainerWeek>
  );
};

WeekListItem.propTypes = {
  RecipeName: PropTypes.string,
  Id: PropTypes.number,
  ChosenDate: PropTypes.any,
};

export { WeekListItem };
