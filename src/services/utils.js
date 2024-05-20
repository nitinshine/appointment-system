export const getCurrentDate = () => {
  // Get the current date
  const today = new Date();

  // Extract the year, month, and day
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(today.getDate()).padStart(2, "0");

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
  minutes = minutes < 10 ? "0" + minutes : minutes; // adding leading zero if minutes < 10
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};
