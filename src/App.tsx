import "./App.css";
import AnnouncementBox, {
  AnnouncementData,
} from "./components/AnnouncementBox";
import FlexBox from "./components/FlexBox";
import StatCard from "./components/StatCard";

function App() {
  const announcements: AnnouncementData[] = [
    {
      date: new Date("2024-09-23"),
      time: new Date("2024-09-23T10:00:00"),
      text: "New Product Launch",
    },
    {
      date: new Date("2024-09-23"),
      time: new Date("2024-09-23T14:30:00"),
      text: "Monthly Team Meeting",
    },
    {
      date: new Date("2024-09-25"),
      time: new Date("2024-09-25T09:15:00"),
      text: "Company Picnic!",
    },
    {
      date: new Date("2024-09-25"),
      time: new Date("2024-09-25T11:00:00"),
      text: "Quarterly Review",
    },
    {
      date: new Date("2024-09-25"),
      time: new Date("2024-09-25T16:45:00"),
      text: "Office Closure Notice",
    },
    {
      date: new Date("2024-09-27"),
      time: new Date("2024-09-27T08:30:00"),
      text: "New Team Member Introduction",
    },
  ];

  return (
    <>
      <FlexBox direction="vertical">
        <FlexBox>
          <StatCard
            theme="orange"
            title="Available Position"
            value={24}
            description="4 Urgently needed"
          />
          <StatCard
            theme="blue"
            title="Job Open"
            value={10}
            description="4 Active Hiring"
          />
          <StatCard
            theme="pink"
            title="New Employees"
            value={24}
            description="4 Department"
          />
        </FlexBox>
        <AnnouncementBox data={announcements} maxAnnouncementToShow={2} />
      </FlexBox>
    </>
  );
}

export default App;
