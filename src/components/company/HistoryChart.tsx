import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Evaluation } from '../../../utils/types';

interface HistoryChartProps {
  evaluationHistory: Evaluation[];
}

const HistoryChart: React.FC<HistoryChartProps> = ({ evaluationHistory }) => {
  // Convert evaluation history to chart data
  const data = evaluationHistory.map(evaluation => {
    const result: any = { date: evaluation.date };
    evaluation.dimensionResults.forEach(dimension => {
      result[dimension.dimensionName] = dimension.levelValue;
    });
    return result;
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis
          tickCount={4}
          tickFormatter={(tick) => tick.toString()}
          domain={[0, 3]}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Procesos" stroke="#8884d8" />
        <Line type="monotone" dataKey="Información" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Tecnología" stroke="#ffc658" />
        <Line type="monotone" dataKey="Personas" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default HistoryChart;
