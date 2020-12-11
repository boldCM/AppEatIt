import React, { useState } from "react";
import styled from "styled-components/macro";
import DiamondImg from "../../assets/diamond.svg";
import { DiamondLine } from "../styledComponents/Lines";
import DatePicker from "react-datepicker";
import "./DatePicker.css";
import { registerLocale } from "react-datepicker";
import de from "date-fns/locale/de";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { updateWeekByDate } from "../../api/connectJSON";
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

  const [date, setDate] = useState(ChosenDate === undefined ? "" : parseDate);

  const getWeekDay = (date) => {
    return new Intl.DateTimeFormat("de-DE", { weekday: "short" }).format(date);
  };

  const updateDate = async (selectedDate) => {
    await updateWeekByDate(selectedDate, Id);
  };

  const handleOnChange = (selectedDate) => {
    setDate(selectedDate);
    updateDate(selectedDate);
  };

  return (
    <ContainerWeek>
      <Diamond>
        {date && <div>{getWeekDay(date)}</div>}
        <StyledDatePicker
          selected={date}
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
