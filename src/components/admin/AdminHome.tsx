import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, Rectangle, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Lunes',
        uv: 50,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Martes',
        uv: 30,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Miercoles',
        uv: 20,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Jueves',
        uv: 27,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Viernes',
        uv: 18,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Sabado',
        uv: 23,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Domingo',
        uv: 34,
        pv: 4300,
        amt: 2100,
    },
];

export default function AdminHome() {
    let totalEvaluations = 520;
    let userStats = [
        {
            name: 'Usuarios registrados',
            value: 120
        },
        {
            name: 'Usuarios recurrentes',
            value: 20
        },
        {
            name: 'Re-evaluaciones',
            value: 10
        },

    ];
    return (
        <div className="h-full w-full flex flex-col items-start justify-center bg-light">
            <div className="w-full p-10">
                <p className="text-3xl font-sans font-bold">Dashboard</p>
            </div>
            <div className="w-full h-full flex flex-row  p-4">
                <div className="h-full w-full flex flex-col bg-white mr-2 border rounded-lg shadow-lg p-4" >
                    <p className="text-2xl font-sans font-bold">Evaluaciones recientes</p>
                    <ResponsiveContainer
                        width="100%"
                        height="100%">
                        <BarChart
                            width={150}
                            height={40}
                            data={data}
                            margin={{
                                top: 50,
                                bottom: 5,
                            }}
                        >
                            <Legend />
                            <Bar dataKey="uv" fill="#202f75" activeBar={<Rectangle fill="#202f75" radius={[5, 5, 0, 0]} />} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />

                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-full w-full flex flex-col" >
                    <div className="h-fit w-full bg-white ml-2 border rounded-lg shadow-lg mb-2 p-4">
                        <p className="text-2xl font-sans font-bold">Total de evaluaciones</p>
                        <p className="text-2xl font-sans">{totalEvaluations}</p>
                    </div>
                    <div className="h-full w-full bg-white ml-2 border rounded-lg shadow-lg p-4">
                        <p className="text-2xl font-sans font-bold">Estadisticas de los usuarios</p>
                        <div className="flex flex-col w-full">
                            {userStats.map((stat, index) => (
                                <StatCard key={index} title={stat.name} value={stat.value.toString()} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

interface StatCardProps {
    title: string;
    value: string;
}

export function StatCard({ title, value }: StatCardProps) {
    return (
        <div className="h-fit w-full flex bg-white ml-2 border rounded-lg shadow-lg my-2">
            <div className="flex w-3/4 h-full bg-slate-300 rounded-tl-lg rounded-bl-lg p-2">
                <p className="text-2xl font-sans font-bold  ">{title}</p>
            </div>
            <div className="flex items-center  justify-center w-1/4">
                <p className="text-2xl font-sans">{value}</p>
            </div>
        </div>
    );
}