import React from 'react';
import { CompanyInfo } from '../../../utils/types';
import DimensionsCard from './DimensionsCard';
import { IoConstructOutline, IoDesktopOutline, IoPeopleOutline } from "react-icons/io5";
import { FaPuzzlePiece } from "react-icons/fa";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import ComparisonWithSector from './ComparisonWithSector';
import HistoryChart from './HistoryChart';
import { IconType } from "react-icons";

interface CompanyHomeProps {
  companyInfo: CompanyInfo;
}

const CompanyHome: React.FC<CompanyHomeProps> = ({ companyInfo }) => {
  const dataRadar = companyInfo.currentEvaluation.map(dimension => ({
    dimension: dimension.dimensionName,
    level: dimension.levelValue,
    fullMark: 3,
    icon: dimension.dimensionName === "Procesos" ? IoConstructOutline :
          dimension.dimensionName === "Información" ? FaPuzzlePiece :
          dimension.dimensionName === "Tecnología" ? IoDesktopOutline :
          IoPeopleOutline,
    color: dimension.dimensionName === "Procesos" ? "bg-red-400" :
          dimension.dimensionName === "Información" ? "bg-blue-400" :
          dimension.dimensionName === "Tecnología" ? "bg-yellow-400" :
          "bg-green-400",
  }));

  return (
    <div className="flex flex-col w-full h-full p-4">
      <p className="w-full mt-10 mb-10 ml-4 text-3xl font-sans font-bold">
        Bienvenid@ {companyInfo.name}, estos son tus resultados
      </p>
      <div className="w-full h-full flex flex-row p-4">
        <div className="h-full w-full flex flex-col bg-white mr-2 border rounded-lg shadow-lg p-4">
          <p className="text-2xl font-sans font-bold mb-1 mt-2">Nivel Actual</p>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col w-1/2">
              <p className="text-lg font-sans mb-2">
                Aquí tienes los resultados de tu evaluación de madurez digital.
              </p>
              <div className="w-full h-96">
                <ResponsiveContainer height="100%" width="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
                    <PolarGrid />
                    <PolarAngleAxis tickSize={20} dataKey="dimension" />
                    <PolarRadiusAxis fontSize={12} orientation="middle" angle={90} domain={[0, 3]} tickCount={4} />
                    <Radar name="lastEvaluation" dataKey="level" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center w-1/2">
              {dataRadar.map((dataRadar, index) => (
                <DimensionsCard key={index} color={dataRadar.color} title={dataRadar.dimension} level={`Nivel ${dataRadar.level}`} icon={dataRadar.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-row p-4">
        <div className="h-full w-full flex flex-col bg-white mr-2 border rounded-lg shadow-lg p-4">
          <p className="text-2xl font-sans font-bold mb-2 mt-4">Historial</p>
          <HistoryChart evaluationHistory={companyInfo.evaluationHistory} />
        </div>
      </div>
    </div>
  );
};

export default CompanyHome;
