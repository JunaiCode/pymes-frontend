import { CartesianGrid, Legend, Line, LineChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import DimensionsCard from "./DimensionsCard";
import { IoConstructOutline, IoDesktopOutline, IoPeopleOutline } from "react-icons/io5";
import { FaGlobe, FaPuzzlePiece } from "react-icons/fa";

export default function CompanyHome(props: any) {
    let companyName = "Bancolombia";
    // Historial de evaluaciones
    let data = [
        {
            dimension: 'Procesos',
            score: 80,
            score2: 100,
        },
        {
            dimension: 'Estrategia',
            score: 70,
            score2: 60,
        },
        {
            dimension: 'Tecnología',
            score: 60,
            score2: 50,
        },
        {
            dimension: 'Personas',
            score: 50,
            score2: 70,
        },
        {
            dimension: 'Cultura',
            score: 40,
            score2: 60,
        },
    ];
    let dataRadar = [
        {
            "dimension": "Procesos",
            "A": 80,
            "fullMark": 100,
            "icon": IoConstructOutline,
            "color": "red"
          },
            {
                "dimension": "Estrategia",
                "A": 70,
                "fullMark": 100,
                "icon": FaPuzzlePiece,
                "color": "blue"
            },
            {
                "dimension": "Tecnología",
                "A": 60,
                "fullMark": 100,
                "icon": IoDesktopOutline,
                "color": "yellow"
            },
            {
                "dimension": "Personas",
                "A": 50,
                "fullMark": 100,
                "icon": IoPeopleOutline,
                "color": "indigo"
            },
            {
                "dimension": "Cultura",
                "A": 40,
                "fullMark": 100,
                "icon": FaGlobe,
                "color": "orange"
            }
    ];
    return (
        <div className="w-full flex flex-col items-start justify-center bg-light">
            <div className="w-full p-10">
                <p className="text-3xl font-sans font-bold">Bienvenid@ {companyName}, estos son tus resultados</p>
            </div>
            <div className="w-full h-full flex flex-row  p-4">
            <div className="h-full w-full flex flex-col bg-white mr-2 border rounded-lg shadow-lg p-4" >
                <p className="text-2xl font-sans font-bold mb-1">Nivel Actual</p>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col w-1/2">
                        <p className="text-lg font-sans mb-2">La madurez digital de su empresa en la última evaluación.</p>
                        <div className="w-full h-96">
                        <ResponsiveContainer height='100%' width='100%'>
                        <RadarChart cx="50%" cy="50%" outerRadius='80%' data={dataRadar}>
                        <PolarGrid />
                        <PolarAngleAxis tickSize={20}  dataKey="dimension" />
                        <PolarRadiusAxis fontSize={12} orientation="middle" angle={90} domain={[0, 100]} />
                        <Radar name="lastEvaluation" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        </RadarChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-center w-1/2">
                        {dataRadar.map((dataRadar) => (
                            <DimensionsCard key={dataRadar.dimension} color={dataRadar.color} title={dataRadar.dimension} score={dataRadar.A} icon={dataRadar.icon} />
                        ))}
                    </div>
                </div>
            </div>
            </div>
            <div className="w-full h-full flex flex-row  p-4">
            <div className="h-full w-full flex flex-col bg-white mr-2 border rounded-lg shadow-lg p-4" >
                <p className="text-2xl font-sans font-bold mb-2">Historial</p>
                        <div className="w-full h-96">
                        <ResponsiveContainer height='100%' width='100%'>
                        <LineChart  data={data}>
                        <Line name="Evaluación 1" type="monotone" dataKey="score" stroke="#8884d8" />
                        <Line name="Evaluación 2" type="monotone" dataKey="score2" stroke="#82ca9d" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="dimension" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            </div>
        </div>
    );
}