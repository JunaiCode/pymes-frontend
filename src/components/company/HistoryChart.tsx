import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Evaluation } from '../../../utils/types';

interface HistoryChartProps {
  evaluationHistory: Evaluation[];
}

const HistoryChart: React.FC<HistoryChartProps> = ({ evaluationHistory }) => {
  const dimensionNames = Array.from(new Set(evaluationHistory.flatMap(evaluation => 
    evaluation.dimensionResults.map(dimension => dimension.dimensionName)
  )));

  const data = evaluationHistory.map(evaluation => {
    const result: any = { date: new Date(evaluation.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }) };
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
        {dimensionNames.map((dimensionName, index) => (
          <Line key={index} type="monotone" dataKey={dimensionName} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export default HistoryChart;
