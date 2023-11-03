import React from "react";
import { styled } from "frontity";

const monthNames = [
    "Січень", "Лютий", "Березень",
    "Квітень", "Травень", "Червень",
    "Липень", "Серпень", "Вересень",
    "Жовтень", "Листопад", "Грудень"
  ];

const DateFormat = ({date}) => {

    const currentDate = new Date(date);

    const day = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return (
        <Time dateTime={currentDate.toLocaleDateString('en-US')}>{month} {day} {year}</Time>
    );
};

export default DateFormat;

const Time = styled.time`
    color: var(--color-text-light);
    font-size: 13px;
`;
