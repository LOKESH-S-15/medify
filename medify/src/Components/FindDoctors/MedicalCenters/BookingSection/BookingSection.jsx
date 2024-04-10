import * as React from "react";

import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";

import styles from "./BookingSection.module.css";
function TabPanel(props) {
  const { children, value, index, slots, handleBooking, center, ...other } =
    props;
  function convert24to12Hour(hours) {
    const [hour, minute] = hours.split(".");
    const hour12 = (hour % 12 || 12).toString().padStart(2, "0");
    const amPm = hour < 12 || hour === 24 ? "AM" : "PM";
    const minuteString = minute.toString().padStart(2, "0");
    return `${hour12}:${minuteString} ${amPm}`;
  }
  const TabContent = ({ slots, handleBooking }) => {
    const handleBookingSlot = (item) => {
      handleBooking(
        { date: slots.date, time: convert24to12Hour(item) },
        center
      );
    };
    return (
      <div className={styles.TabContentCon}>
        <div className={styles.TabContentSectionCon}>
          <h1 className={styles.TabContentHead}>Morning</h1>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                "&.Mui-disabled": { opacity: 0.3 },
              },
            }}
            className={styles.TabContentSlotsCon}
          >
            {slots.timeSlots[0].morning.length === 0 ? (
              <p>No Slot available</p>
            ) : (
              slots.timeSlots[0].morning.map((item, i) => (
                <Tab
                  className={styles.TabContentSlot}
                  label={
                    <button
                      className={styles.TabContentSlotsBtn}
                      onClick={() => handleBookingSlot(item)}
                    >
                      {convert24to12Hour(item)}
                    </button>
                  }
                />
              ))
            )}
          </Tabs>
        </div>
        <div className={styles.TabContentSectionCon}>
          <h1 className={styles.TabContentHead}>Afternoon</h1>

          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="visible arrows tabs example"
            className={styles.TabContentSlotsCon}
          >
            {slots.timeSlots[1].afternoon.length === 0 ? (
              <p>No Slot available</p>
            ) : (
              slots.timeSlots[1].afternoon.map((item, i) => (
                <Tab
                  className={styles.TabContentSlot}
                  label={
                    <button
                      className={styles.TabContentSlotsBtn}
                      onClick={() => handleBookingSlot(item)}
                    >
                      {convert24to12Hour(item)}
                    </button>
                  }
                />
              ))
            )}
          </Tabs>
        </div>
        <div className={styles.TabContentSectionCon}>
          <h1 className={styles.TabContentHead}>Evening</h1>

          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            aria-label="visible arrows tabs example"
            className={styles.TabContentSlotsCon}
          >
            {slots.timeSlots[2].evening.length === 0 ? (
              <p>No Slot available</p>
            ) : (
              slots.timeSlots[2].evening.map((item, i) => (
                <Tab
                  className={styles.TabContentSlot}
                  label={
                    <button
                      className={styles.TabContentSlotsBtn}
                      onClick={() => handleBookingSlot(item)}
                    >
                      {convert24to12Hour(item)}
                    </button>
                  }
                />
              ))
            )}
          </Tabs>
        </div>
      </div>
    );
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          {" "}
          <TabContent slots={slots} handleBooking={handleBooking} />
          <Divider />
        </>
      )}
    </div>
  );
}

export default function BookingSection({
  timeSlotsList,
  handleBooking,
  center,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  const getTimeOfSlots = (date) => {
    const timeslot = new Date(date);

    if (
      timeslot.setHours(0, 0, 0, 0, 0, 0) -
        new Date().setHours(0, 0, 0, 0, 0, 0) ===
      0
    ) {
      return "Today";
    } else if (
      timeslot.setHours(0, 0, 0, 0, 0, 0) -
        new Date().setHours(0, 0, 0, 0, 0, 0) <=
      86400000
    ) {
      return "Tommorow";
    } else {
      return `${timeslot.toLocaleDateString("en-US", {
        weekday: "short",
      })}, ${timeslot.getDate()}${timeslot.toLocaleDateString("en-US", {
        month: "short",
      })}`;
    }
  };

  const getTotalAvailSlots = (timeSlots) => {
    const totalAvailableSlots = timeSlots.reduce((value, each) => {
      return (
        value +
        Object.values(each).reduce((value, each) => {
          return value + each.length;
        }, 0)
      );
    }, 0);

    return totalAvailableSlots;
  };

  const tabSection = (slot, index) => {
    const tab = (
      <div className={styles.tabSectionCon}>
        <h1 className={styles.tabSectionhead}>{getTimeOfSlots(slot.date)}</h1>
        <p className={styles.tabSectioncount}>
          {getTotalAvailSlots(slot.timeSlots)} slots available
        </p>
      </div>
    );
    return tab;
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
        }}
      >
        {timeSlotsList.map((each, index) => {
          console.log(each);
          return (
            <Tab
              sx={{ width: "32%" }}
              label={tabSection(each)}
              {...a11yProps(index)}
            />
          );
        })}
      </Tabs>
      {timeSlotsList.map((each, index) => {
        console.log(each);
        return (
          <TabPanel
            value={value}
            index={index}
            slots={each}
            handleBooking={handleBooking}
            center={center}
          />
        );
      })}
    </Box>
  );
}
