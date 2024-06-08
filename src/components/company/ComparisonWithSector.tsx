import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
  labels: ['Procesos', 'Información', 'Tecnología', 'Personas'],
  datasets: [
    {
      label: 'Tu empresa',
      data: [2, 1, 3, 2], 
      backgroundColor: 'rgba(34, 202, 236, .2)',
      borderColor: 'rgba(34, 202, 236, 1)',
    },
    {
      label: 'Promedio en el sector económico',
      data: [2, 2, 2, 3], 
      backgroundColor: 'rgba(255, 206, 86, .2)',
      borderColor: 'rgba(255, 206, 86, 1)',
    },
  ],
};

const options = {
  scales: {
    r: {
      angleLines: {
        display: false,
      },
      suggestedMin: 0,
      suggestedMax: 3,
      ticks: {
        stepSize: 1, 
        beginAtZero: true, 
      },
    },
  },
};

const ComparisonWithSector = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Comparación con el sector económico</h1>
      <p className="text-base leading-relaxed mb-5">
        La herramienta Comparación proporciona una vista del nivel actual de su empresa comparado con el nivel promedio
        de otras empresas de su mismo sector económico. Esto le permitirá saber en términos de competitividad qué tan avanzado
        o qué tanta oportunidad de mejora tiene su empresa.
      </p>
      <div className="flex justify-center mb-5">
        <div className="w-96 h-96">
          <Radar data={data} options={options} />
        </div>
      </div>
      <div className="flex justify-center p-5 bg-gray-200 rounded-lg">
        <p>Información relevante del sector económico</p>
      </div>
    </div>
  );
};

export default ComparisonWithSector;
