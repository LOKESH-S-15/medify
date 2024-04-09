import React from "react";
import MedicalCenterCard from "./MedicalCenterCard/MedicalCenterCard";
import styles from "./MedicalCenter.module.css";
const MedicalCenters = ({ medicalCenters }) => {
  const [timeSlotsList, setTimeSlotsList] = React.useState([]);

  React.useEffect(() => {
    FetchTimeSlot();
  }, []);
  const FetchTimeSlot = () => {
    const timeSlots = getNext7DaysTimeSlots();
    setTimeSlotsList(timeSlots);
  };
  const getTimeSlots = (startingDateTime) => {
    const timeSlots = [{ morning: [] }, { afternoon: [] }, { evening: [] }];
    const startTime = new Date(startingDateTime);
    if (startTime.getTime() > new Date().getTime()) {
      startTime.setHours(9, 45, 0);
    }

    // Morning session
    for (let i = startTime.getHours(); i < 12; i++) {
      if (i >= 10) {
        const timeSlotStart = new Date(startTime);
        if (i > startTime.getHours() || startTime.getMinutes() < 30) {
          timeSlotStart.setHours(i, 30);
          timeSlots[0].morning.push(formatTime(timeSlotStart));
        }
        timeSlotStart.setHours(i + 1, 0);

        timeSlots[0].morning.push(formatTime(timeSlotStart));
      }
    }

    // Afternoon session
    for (let i = startTime.getHours(); i < 15; i++) {
      if (i >= 12) {
        const timeSlotStart = new Date(startTime);
        if (i > startTime.getHours() || startTime.getMinutes() < 30) {
          timeSlotStart.setHours(i, 30);
          timeSlots[1].afternoon.push(formatTime(timeSlotStart));
        }
        timeSlotStart.setHours(i + 1, 0);

        timeSlots[1].afternoon.push(formatTime(timeSlotStart));
      }
    }

    // Evening sessions
    for (let i = startTime.getHours(); i < 20; i++) {
      if (i >= 18) {
        const timeSlotStart = new Date(startTime);
        if (i > startTime.getHours() || startTime.getMinutes() < 30) {
          timeSlotStart.setHours(i, 30);
          timeSlots[2].evening.push(formatTime(timeSlotStart));
        }
        timeSlotStart.setHours(i + 1, 0);

        timeSlots[2].evening.push(formatTime(timeSlotStart));
      }
    }

    return timeSlots;
  };
  function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}.${minutes}`;
  }

  const getNext7DaysTimeSlots = () => {
    const timeSlotsList = [];
    const currentDate = new Date();

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      timeSlotsList.push({ date: nextDate, timeSlots: getTimeSlots(nextDate) });
    }

    return timeSlotsList;
  };

  const handleBooking = (slot, center) => {
    console.log(slot);
    console.log(center);
  };

  return (
    <div className={styles.MedicalCentersCon}>
      <div className={styles.MedicalCentersMainCon}>
        <h2 className={styles.MedicalCentershead}>
          {medicalCenters.length} medical centers available in{" "}
          {medicalCenters[0].State}
        </h2>
        <div className={styles.MedicalCentersParaCon}>
          <img />
          <p>
            Book appointments with minimum wait-time & verified doctor details
          </p>
        </div>
        <div className={styles.MedicalCentersSubCon}>
          <div className={styles.MedicalCentersCardCon}>
            {medicalCenters.map((each, index) => {
              return (
                <MedicalCenterCard
                  key={index}
                  center={each}
                  timeSlotsList={timeSlotsList}
                  handleBooking={handleBooking}
                />
              );
            })}
          </div>
          <div className={styles.MedicalCentersCardSubCon}></div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCenters;
