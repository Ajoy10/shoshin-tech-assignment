import "./App.css";
import AnnouncementBox, {
  AnnouncementData,
} from "./components/AnnouncementBox";
import FlexBox from "./components/FlexBox";
import ScheduleBox, { ScheduleData } from "./components/ScheduleBox";
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

  const schedules: ScheduleData[] = [
    {
      date: new Date("2024-10-01"),
      time: new Date("2024-10-01T09:00:00"),
      text: "Product Release Date",
      priority: true,
    },
    {
      date: new Date("2024-10-01"),
      time: new Date("2024-10-01T14:30:00"),
      text: "Team Lunch",
      priority: false,
    },
    {
      date: new Date("2024-10-02"),
      time: new Date("2024-10-02T11:00:00"),
      text: "Quarterly Strategy Meeting",
      priority: true,
    },
    {
      date: new Date("2024-10-02"),
      time: new Date("2024-10-02T15:00:00"),
      text: "Client Presentation Prep",
      priority: true,
    },
    {
      date: new Date("2024-10-03"),
      time: new Date("2024-10-03T10:00:00"),
      text: "Team Building Workshop",
      priority: false,
    },
    {
      date: new Date("2024-10-03"),
      time: new Date("2024-10-03T13:30:00"),
      text: "Office Health and Safety Training",
      priority: false,
    },
    {
      date: new Date("2024-10-04"),
      time: new Date("2024-10-04T09:00:00"),
      text: "All-Hands Meeting",
      priority: true,
    },
    {
      date: new Date("2024-10-04"),
      time: new Date("2024-10-04T12:00:00"),
      text: "Project Kickoff",
      priority: false,
    },
    {
      date: new Date("2024-10-04"),
      time: new Date("2024-10-04T15:00:00"),
      text: "Feedback Session",
      priority: true,
    },
  ];

  return (
    <>
      <main>
        <h1>Dashboard</h1>
        <FlexBox>
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
            <div id="box-1">
              <div className="item">Yet to create</div>
              <div className="item">Yet to create</div>
            </div>

            <AnnouncementBox data={announcements} />
          </FlexBox>
          <FlexBox direction="vertical">
            <div id="box-2">Yet to create</div>
            <ScheduleBox data={schedules} />
          </FlexBox>
        </FlexBox>
      </main>
    </>
  );
}

export default App;
