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
