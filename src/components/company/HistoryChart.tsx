import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Evaluation } from '../../../utils/types';

interface HistoryChartProps {
  evaluationHistory: Evaluation[];
}

const HistoryChart: React.FC<HistoryChartProps> = ({ evaluationHistory }) => {
  const data = evaluationHistory.map(evaluation => {
    const entry: any = { date: new Date(evaluation.date).toLocaleDateString() }; // Formatear la fecha
    evaluation.dimensionResults.forEach(dimension => {
      entry[dimension.dimensionName] = dimension.levelValue;
    });
    return entry;
  });

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1", "#d0ed57", "#a4de6c", "#d0ed57", "#ffc658"];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {evaluationHistory[0].dimensionResults.map((dimension, index) => (
          <Line key={dimension.dimensionId} type="monotone" dataKey={dimension.dimensionName} stroke={colors[index % colors.length]} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default HistoryChart;
