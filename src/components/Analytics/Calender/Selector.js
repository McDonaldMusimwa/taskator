import React from "react";
import ReactHorizontalDatePicker from "react-horizontal-strip-datepicker";
import "react-horizontal-strip-datepicker/dist/ReactHorizontalDatePicker.css";
import { format, toDate } from "date-fns"; // Import the necessary functions from date-fns
import './Selector.scss'

const Selector = ({ onDateChange }) => {
  const onSelectedDay = (selectedDate) => {
    // Convert the selected date to a Date object
    const dateObject = toDate(selectedDate);

    // Format the date object
    const formattedDate = format(dateObject, "dd/MM/yyyy");

    // Call the onDateChange callback with the formatted date
    //onDateChange(formattedDate);
    console.log(formattedDate);
  };

  return (
    <div className="Selector">
      <ReactHorizontalDatePicker
        selectedDay={onSelectedDay}
        enableScroll={true}
        enableDays={15}
        color={"#4444"}
      />
    </div>
  );
};

export default Selector;
