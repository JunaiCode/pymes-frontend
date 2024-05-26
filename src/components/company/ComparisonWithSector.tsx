import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
  labels: ['Procesos', 'Gente', 'Economía', 'Administración', 'Tecnología'],
  datasets: [
    {
      label: 'Tu empresa',
      data: [65, 59, 90, 81, 56],
      backgroundColor: 'rgba(34, 202, 236, .2)',
      borderColor: 'rgba(34, 202, 236, 1)',
    },
    {
      label: 'Promedio en el sector económico',
      data: [28, 48, 40, 19, 96],
      backgroundColor: 'rgba(255, 206, 86, .2)',
      borderColor: 'rgba(255, 206, 86, 1)',
    },
  ],
};

const options = {
  scales: {
    r: {
      angleLines: {
        display: false
      },
      suggestedMin: 0,
      suggestedMax: 100
    }
  }
};

const ComparisonWithSector = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '20px' }}>Comparación con el sector económico</h1>
      <p style={{ fontSize: '1em', lineHeight: '1.5', marginBottom: '20px' }}>
        La herramienta Comparación proporciona una vista del nivel actual de su empresa comparado con el nivel promedio
        de otras empresas de su mismo sector económico. Esto le permitirá saber en términos de competitividad qué tan avanzado
        o qué tanta oportunidad de mejora tiene su empresa.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ width: '400px', height: '400px' }}>
          <Radar data={data} options={options} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', backgroundColor: '#f8f8f8', borderRadius: '8px' }}>
        <p>Información relevante del sector económico</p>
      </div>
    </div>
  );
};

export default ComparisonWithSector;
