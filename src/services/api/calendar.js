import { ai } from "../axios";

export const getTimeSlots = (startDate) => {
  return new Promise((resolve, reject) => {
    ai({
      method: "GET",
      params: {
        start_date: startDate,
      },
      url: "/scripttag/mock_timeslots",
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
