import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend,
} from 'recharts';


//Example data 
const data = [
  { subject: 'Procesos', A: 5, B: 7 },
  { subject: 'Gente', A: 6, B: 8 },
  { subject: 'Economia', A: 7, B: 6 },
  { subject: 'Administracion', A: 4, B: 5 },
  { subject: 'Tecnologia', A: 8, B: 9 },
];

const CustomRadarChart = () => {
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Tu empresa" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Promedio en la industria bancaria" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Tooltip />
      <Legend />
    </RadarChart>
  );
};

export default CustomRadarChart;
