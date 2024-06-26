import React, { useState } from "react";
import { IoPencil } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
interface props{
    percentage: string;
    finishDate: string;
    setFinishDate: any;
}
const baseUrl = "http://18.218.220.138:8081";
export const ProgressRoadMap = ({ percentage,finishDate,setFinishDate,startDate,actionPlanId }: any) => {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [date, setDate] = useState(null);
    const formatDate = 'yyyy-MM-dd'
    const handlePencilClick = () => {
        setIsDatePickerOpen(true);
    };

    const handleDateChange = (date:any) => {
        const isoString = date.toISOString();
        const stringWithoutZ = isoString.slice(0, -1);
        const formattedDate = format(date, formatDate);
        setFinishDate(formattedDate); 
        setDate(date);
        fetch(`${baseUrl}/actionPlan/updateEnd/${actionPlanId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: stringWithoutZ,
            }),
        }).catch((error) => {
            console.error("Error al actualizar la fecha de finalización:", error);
        });
        setIsDatePickerOpen(false);
    };

    return (
        <div className="ProgressRoadMap-sticky h-36 rounded-b-md w-1/2 z-50 bg-dark_bg border-b border-gray-300 p-4 flex flex-col justify-center items-center m-0">
            <div className="flex flex-col justify-start w-full mb-4">
                <div className="flex flex-row justify-between items-baseline mb-2">
                    <p className="text-lg font-sans text-white font-light">Inicio de la hoja de ruta:</p>
                    <p className="pr-4 pl-4 rounded text-white bg-secondary_old inline-block">{format(startDate,formatDate)}</p>
                </div>
                <div className="flex flex-row justify-between items-baseline">
                    <p className="text-lg font-sans text-white font-light">Finalización de la hoja de ruta:</p>
                    <div className="flex items-center">
                        <IoPencil 
                            className="text-white cursor-pointer hover:text-blue-700 transition duration-200 mr-2" 
                            size={24} 
                            onClick={handlePencilClick}
                        />
                        {isDatePickerOpen && (
                            <DatePicker
                                selected={date}
                                onChange={handleDateChange}
                                dateFormat={"yyyy-MM-dd"}
                                className="pr-4 pl-4 rounded text-white bg-secondary_old inline-block"
                                placeholderText="Seleccionar fecha"
                            />
                        )}
                        {!isDatePickerOpen && (
                            <p className="pr-4 pl-4 rounded text-white bg-secondary_old inline-block">{finishDate?finishDate:"Por definirse"}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-start items-center">
                <p className="text-lg font-sans text-white mr-2">Mi progreso</p>
                <div className="w-3/4 bg-gray-200 rounded-full h-2.5">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${percentage}` }}></div>
                </div>
            </div>
        </div>
    );
};
