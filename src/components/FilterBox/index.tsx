import style from "./FilterBox.module.css";

import { ReactNode, useEffect, useState } from "react";
import FlexBox from "../FlexBox";

type FilterBoxPropType = {
  className?: string;
  children: ReactNode;
  title: string;
  seeMoreText: string;
  seeMoreLink: string;

  filterData: string[];

  onFilterChange?: (filter: string) => void;
  displayAsTransformer?: (value: string) => string;
};

export default function FilterBox({
  className = "",
  children,
  title,
  seeMoreLink = "#",
  seeMoreText = "See more",
  filterData,
  onFilterChange,
  displayAsTransformer,
}: FilterBoxPropType) {
  const [selectedFilter, setSelectedFilter] = useState(filterData[0]);

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(selectedFilter);
    }
  }, [onFilterChange, selectedFilter]);

  return (
    <FlexBox
      className={style.filter_box}
      direction="vertical"
      style={{ flexWrap: "nowrap" }}
    >
      <FlexBox className={style.filter_box_header}>
        <div className="component-title">{title}</div>
        <div className={style.filter}>
          <select
            onChange={(e) => {
              setSelectedFilter(e.currentTarget.value);
            }}
            value={selectedFilter}
          >
            {filterData?.map((data) => {
              return (
                <option value={data}>
                  {displayAsTransformer ? displayAsTransformer(data) : data}
                </option>
              );
            })}
          </select>
        </div>
      </FlexBox>

      <div className={style.filter_content + " " + className}>{children}</div>

      <div className={style.filter_see_more}>
        <a href={seeMoreLink}>{seeMoreText}</a>
      </div>
    </FlexBox>
  );
}
