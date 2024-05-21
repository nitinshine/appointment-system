export const getFormattedDate = (date) => {
  // Get the current date
  date = new Date(date);

  // Extract the year, month, and day
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  // Format the date as YYYY-MM-DD
  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export const formatTo12HourTime = (date) => {
  if (!date) return "";
  date = new Date(date); // Convert the date string to a Date object
  let hours = date.getUTCHours(); // Get the hours in UTC
  let minutes = date.getUTCMinutes(); // Get the minutes in UTC
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? "0" + hours : hours; // adding leading zero if hours < 10
  minutes = minutes < 10 ? "0" + minutes : minutes; // adding leading zero if minutes < 10
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const options = { weekday: "long", month: "short", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  // Split the formatted date into parts
  const [weekday, month, day] = formattedDate.split(" ");

  // Convert parts to uppercase and format the final string
  const formattedString = `${weekday.toUpperCase()}, ${month.toUpperCase()} ${parseInt(
    day
  )}`;

  return formattedString;
};
