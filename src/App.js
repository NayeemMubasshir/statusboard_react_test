import React from "react";
import CardList from "./components/CardList";
import { FaCircle } from "react-icons/fa";

export default function App() {
  const circleIconStyles = {
    "Incomplete": { color: "red", fontSize: "20px", marginRight: "8px" },
    "To do": { color: "blue", fontSize: "20px", marginRight: "8px" },
    "Doing": { color: "yellow", fontSize: "20px", marginRight: "8px" },
    "Under Review": { color: "orange", fontSize: "20px", marginRight: "8px" },
    "Completed": { color: "green", fontSize: "20px", marginRight: "8px" },
    "Overdue": { color: "purple", fontSize: "20px", marginRight: "8px" },
    "For later": { color: "gray", fontSize: "20px", marginRight: "8px" },
  };

  return (
    <div className="relative p-2 flex flex-none overflow-x-auto h-screen w-full overflow-y-hidden">
      <CardList title={"Incomplete"} circleIcon={<FaCircle style={circleIconStyles["Incomplete"]} />} />
      <CardList title={"To do"} circleIcon={<FaCircle style={circleIconStyles["To do"]} />} />
      <CardList title={"Doing"} circleIcon={<FaCircle style={circleIconStyles["Doing"]} />} />
      <CardList title={"Under Review"} circleIcon={<FaCircle style={circleIconStyles["Under Review"]} />} />
      <CardList title={"Completed"} circleIcon={<FaCircle style={circleIconStyles["Completed"]} />} />
      <CardList title={"Overdue"} circleIcon={<FaCircle style={circleIconStyles["Overdue"]} />} />
      <CardList title={"For later"} circleIcon={<FaCircle style={circleIconStyles["For later"]} />} />
    </div>
  );
}
