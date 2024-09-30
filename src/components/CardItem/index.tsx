import style from "./CardItem.module.css";

import { Key, ReactNode } from "react";
import { Icon } from "@iconify/react";
import FlexBox from "../FlexBox";

type CardItemPropType = {
  key: Key;
  children: ReactNode;
  hasPin?: boolean;
  metaText?: string;
};

export default function CardItem({
  key,
  children,
  hasPin = false,
  metaText = "",
}: CardItemPropType) {
  return (
    <FlexBox className={style.card_item} key={key}>
      <div className={style.ci_content}>
        <div className={style.ci_value}>{children}</div>
        <div className={style.ci_meta_text}>{metaText}</div>
      </div>
      <FlexBox className={style.ci_action} gap={20}>
        {hasPin && (
          <div className="pin-btn">
            <Icon icon={"bi:pin-angle-fill"} />
          </div>
        )}
        <div className="more-btn">
          <Icon icon={"carbon:overflow-menu-horizontal"} />
        </div>
      </FlexBox>
    </FlexBox>
  );
}
