import "./Charts.scss";
import { RadialChart } from "react-vis";
import React from "react";
import Card from "../CardStyles/Card";
const Charts = (props) => {
  const { tasks } = props;

  // Convert the grouped tasks to an array of objects with the 'angle' property
  const myData = tasks.map((task) => ({
    angle: Math.floor(task.status / 10),
    label: `${task.status}% complete`
  }));

  return (
    <Card className="CompletionRate">
        <h3>Completion rate</h3>
      <RadialChart
        height={300}
        width={270}
        data={myData}
        innerRadius={80}
        labelsRadiusMultiplier={1.2}
        labelsStyle={{
          fontSize: 12,
          fontWeight: "bold",
          fill: "#ffffff",
        }}
        title="Task Completion"
      />
    </Card>
  );
};

export default Charts;
