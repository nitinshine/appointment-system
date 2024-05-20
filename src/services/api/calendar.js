import { ai } from "../axios";
import { formatTo12HourTime } from "../utils";

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
        const data = res.data.map((time) => {
          return {
            ...time,
            slots: time.slots.map((slot) => ({
              start_time: formatTo12HourTime(slot.start_time),
              end_time: formatTo12HourTime(slot.end_time),
            })),
          };
        });
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
