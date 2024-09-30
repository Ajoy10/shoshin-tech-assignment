import style from "./AnnouncementBox.module.css";

import { useEffect, useState } from "react";
import dayjs from "../../utils/custom-dayjs";
import CardItem from "../CardItem";
import FlexBox from "../FlexBox";
import FilterBox from "../FilterBox";

export type AnnouncementData = {
  date: Date;
  time: Date;
  text: string;
};

type AnnouncementBoxPropType = {
  data: AnnouncementData[];
};

export default function AnnouncementBox({ data }: AnnouncementBoxPropType) {
  const avaialable_dates = Array.from(
    new Set(
      data.map((announcement) => dayjs(announcement.date).format("D MMM YYYY"))
    )
  );

  const [selectedDate, setSelectedDate] = useState(avaialable_dates[0]);
  const [activeData, setActiveData] = useState<AnnouncementData[]>([]);

  useEffect(() => {
    setActiveData(
      data.filter((dt) => dayjs(dt.date).format("D MMM YYYY") === selectedDate)
    );
  }, [data, selectedDate]);

  return (
    <FilterBox
      className={style.anb_content}
      title="Announcement"
      seeMoreLink="#"
      seeMoreText="See All Announcements"
      filterData={avaialable_dates}
      onFilterChange={(newFilter) => setSelectedDate(newFilter)}
      displayAsTransformer={(val) => dayjs(val).fromNow() + ", " + val}
    >
      {activeData.map((announcement, id) => {
        return (
          <CardItem
            key={id}
            hasPin
            metaText={dayjs(announcement.time).fromNow()}
          >
            {announcement.text}
          </CardItem>
        );
      })}
    </FilterBox>
  );
}
