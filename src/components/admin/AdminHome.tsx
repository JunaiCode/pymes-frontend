import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    return (
        <div className="w-full flex flex-col items-start justify-center bg-light">
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
                            <Bar dataKey="uv" fill="#202f75" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="h-full w-full bg-white ml-2 border rounded-lg shadow-lg" >

                </div>
            </div>

        </div>
    );
}