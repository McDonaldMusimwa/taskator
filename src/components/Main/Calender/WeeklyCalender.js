import React from "react";
import ReactHorizontalDatePicker from "react-horizontal-strip-datepicker";
import "react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css";
import { format, toDate } from "date-fns"; // Import the necessary functions from date-fns

const WeeklyCalender = ({ onDateChange }) => {
  const onSelectedDay = (selectedDate) => {
    // Convert the selected date to a Date object
    const dateObject = toDate(selectedDate);

    // Format the date object
    const formattedDate = format(dateObject, "dd/MM/yyyy");

    // Call the onDateChange callback with the formatted date
    onDateChange(formattedDate);
    
  };



  return (
    <ReactHorizontalDatePicker
      selectedDay={onSelectedDay}
      enableScroll={true}
      enableDays={15}
      color={"#4444"}
    />
  );
};

export default WeeklyCalender;
