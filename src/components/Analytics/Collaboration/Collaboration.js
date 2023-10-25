import { XYPlot, VerticalBarSeries, XAxis, YAxis, DiscreteColorLegend } from 'react-vis';
import Card from '../CardStyles/Card';
const CollaboratorBreakdownChart = ({ tasks }) => {
  console.log(tasks)
  // Count the total number of tasks and tasks with collaboration
  const totalTasks = tasks.length;
  const collaborationTasks = tasks.filter(task => task.collaboration!== "None").length;

  // Prepare data for the bar chart
  const data = [
    { x: 'Collaboration', y: collaborationTasks },
    { x: 'Individual', y: totalTasks - collaborationTasks }
  ];

  // Define the color for collaboration and individual tasks
  const collaborationColor = '#34a853';
  const individualColor = '#4285f4';

  // Define the legend items for collaboration status
  const legendItems = [
    { title: 'Collaboration', color: collaborationColor },
    { title: 'Individual', color: individualColor }
  ];

  return (
    <Card>
      <XYPlot width={250} height={300} xType="ordinal">
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          data={data}
          colorType="literal"
          getColor={({ x }) => (x === 'Collaboration' ? collaborationColor : individualColor)}
        />
      </XYPlot>
      <DiscreteColorLegend orientation="horizontal" items={legendItems} />
    </Card>
  );
};

export default CollaboratorBreakdownChart;
