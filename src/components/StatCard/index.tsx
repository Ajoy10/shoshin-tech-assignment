import style from "./StatCard.module.css";

type HEX = `#${string}`;

function createCardTheme(backgroundColor: HEX, descriptionColor: HEX) {
  return { backgroundColor, descriptionColor };
}

const themes = {
  white: createCardTheme("#FAFAFA", "#88888"),
  orange: createCardTheme("#FFEFE7", "#FF5151"),
  blue: createCardTheme("#E8F0FB", "#3786F1"),
  pink: createCardTheme("#FDEBF9", "#EE61CF"),
};

type StatCardPropType = {
  title?: string;
  value?: number;
  description?: string;
  theme: keyof typeof themes;
};

export default function StatCard({
  title = "Default Title",
  value = 0,
  description = "Default Description",
  theme = "white",
}: StatCardPropType) {
  return (
    <div
      className={style.card}
      style={{ backgroundColor: themes[theme].backgroundColor }}
    >
      <div className={style.card_title}>{title}</div>
      <div className={style.card_value}>{value}</div>
      <div
        className={style.card_desc}
        style={{ color: themes[theme].descriptionColor }}
      >
        {description}
      </div>
    </div>
  );
}
