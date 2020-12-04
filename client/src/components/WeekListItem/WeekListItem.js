import React, { useState } from "react";
import styled from "styled-components/macro";
import DiamondImg from "../../assets/diamond.svg";
import { DiamondLine } from "../styledComponents/Lines";
import DatePicker from "react-datepicker";
import "./DatePicker.css";
import { registerLocale } from "react-datepicker";
import de from "date-fns/locale/de";
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

const TextWeek = styled.a`
  color: var(--text-color);
  padding-bottom: 1px;
  /* 1px looked more aligned with the hr line. */
`;

const WeekListItem = () => {
  const [date, setDate] = useState(new Date());

  const getWeekDay = (date) => {
    const week = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
    const weekday = week[date.getDay()];
    return weekday;
  };

  return (
    <ContainerWeek>
      <Diamond>
        <div>{getWeekDay(date)}</div>
        <StyledDatePicker
          selected={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          dateFormat="dd.MM."
          locale="de"
          useWeekdaysShort={false}
        />
      </Diamond>
      <DiamondLine />
      <TextWeek href="/">Geschnetzeltes</TextWeek>
    </ContainerWeek>
  );
};

export { WeekListItem };
