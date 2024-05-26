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

export const ProgressRoadMap = ({ percentage,finishDate,setFinishDate,startDate,setStartDate }: any) => {
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [date, setDate] = useState(null);
    const formatDate = 'yyyy-MM-dd'

    const handlePencilClick = () => {
        setIsDatePickerOpen(true);
    };

    const handleDateChange = (date:any) => {
        const formattedDate = format(date, formatDate);
        setFinishDate(formattedDate); 
        setDate(date);
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
