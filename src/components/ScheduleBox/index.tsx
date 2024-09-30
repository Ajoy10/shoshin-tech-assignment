import style from "./ScheduleBox.module.css";

import { useEffect, useState } from "react";
import dayjs from "../../utils/custom-dayjs";
import CardItem from "../CardItem";
import FilterBox from "../FilterBox";

export type ScheduleData = {
  date: Date;
  time: Date;
  text: string;
  priority: boolean;
};

type ScheduleBoxPropType = {
  data: ScheduleData[];
};

export default function ScheduleBox({ data }: ScheduleBoxPropType) {
  const avaialable_dates = Array.from(
    new Set(
      data.map((announcement) => dayjs(announcement.date).format("D MMM YYYY"))
    )
  );

  const [selectedDate, setSelectedDate] = useState(avaialable_dates[0]);
  const [activeData, setActiveData] = useState<ScheduleData[]>([]);

  useEffect(() => {
    setActiveData(
      data.filter((dt) => dayjs(dt.date).format("D MMM YYYY") === selectedDate)
    );
  }, [data, selectedDate]);

  return (
    <FilterBox
      className={style.sb_content}
      title="Upcominng Schedule"
      seeMoreLink="#"
      seeMoreText="Create a New Schedule"
      filterData={avaialable_dates}
      onFilterChange={(newFilter) => setSelectedDate(newFilter)}
      displayAsTransformer={(val) => dayjs(val).fromNow() + ", " + val}
    >
      <div className={style.sb_sub}>Priority</div>
      {activeData
        .filter((data) => data.priority)
        .map((schedule, id) => {
          return ScheduleCard(id, schedule);
        })}
      <div className={style.sb_sub}>Other</div>
      {activeData
        .filter((data) => !data.priority)
        .map((schedule, id) => {
          return ScheduleCard(id, schedule);
        })}
    </FilterBox>
  );
}

function ScheduleCard(id: number, schedule: ScheduleData) {
  return (
    <CardItem
      key={id}
      metaText={
        dayjs(schedule.time).fromNow() +
        " - " +
        dayjs(schedule.time).format("h:mm:A")
      }
    >
      {schedule.text}
    </CardItem>
  );
}
