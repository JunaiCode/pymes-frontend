'use client';
import React, { useState } from 'react';
import { IoCloseCircleOutline, IoCheckmarkCircleOutline, IoPencil } from "react-icons/io5";

// Definimos un tipo para la información de la empresa
type CompanyInfo = {
  name: string;
  type: string;
  nit: string;
  address: string;
  city: string;
  phone: string;
  legalRepresentativeName: string;
  legalRepresentativeEmail: string;
  legalRepresentativePhone: string;
  economicSector: string;
  numberOfEmployees: number;
  yearsInOperation: number;
  [key: string]: string | number;
}

// Definimos un tipo para la información editada
type EditedInfo = {
  [key: string]: string | number; // El valor puede ser string o number
}

const Profile = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: "Tech Innovators Inc.",
    type: "Tecnología y Consultoría",
    nit: "1234567890",
    address: "123 Calle Principal",
    city: "Ciudad Tech",
    phone: "+571234567890",
    legalRepresentativeName: "Juan Pérez",
    legalRepresentativeEmail: "juan.perez@techinnovators.com",
    legalRepresentativePhone: "+579876543210",
    economicSector: "Tecnología",
    numberOfEmployees: 150,
    yearsInOperation: 10,
  });

  const [editMode, setEditMode] = useState<Record<string, boolean>>({}); // Ajustamos el tipo de estado para editMode
  const [editedInfo, setEditedInfo] = useState<EditedInfo>(companyInfo); // Ajustamos el tipo de estado para editedInfo
  const [errors, setErrors] = useState<Record<string, string>>({}); // Ajustamos el tipo de estado para errors

  const handleEditClick = (key: string) => {
    setEditMode({ ...editMode, [key]: true });
    setEditedInfo({ ...editedInfo, [key]: companyInfo[key] });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const { value } = event.target;
    setEditedInfo({ ...editedInfo, [key]: value });
  };

  const handleSaveClick = (key: string) => {
    if (key === 'nit' || key === 'phone' || key === 'legalRepresentativePhone') {
      const isValidFormat = RegExp('^[0-9]{10}$').test(editedInfo[key].toString().replace(/\D/g, ''));
      if (!isValidFormat) {
        setErrors({ ...errors, [key]: "El formato debe ser de 10 dígitos numéricos" });
        return;
      }
    }

    if (editedInfo[key].toString().trim() !== "") {
      setCompanyInfo({ ...companyInfo, [key]: editedInfo[key] });
      setEditMode({ ...editMode, [key]: false });
      setErrors({ ...errors, [key]: "" });
      /*
      const response = await fetch(API, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [key]: editedInfo[key] }),
      });

      if (!response.ok) {
        throw new Error('Error saving changes');
      }*/
    } else {
      setErrors({ ...errors, [key]: "Este campo no puede estar vacío" });
    }
  };

  const handleCancelClick = (key: string) => {
    setEditMode({ ...editMode, [key]: false });
    setEditedInfo(companyInfo);
    setErrors({ ...errors, [key]: "" });
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      <div className="  rounded-lg p-6 max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-secondary_old">Perfil de la Empresa</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(companyInfo).map(([key, value]) => (
            <div key={key} className="flex flex-col bg-white p-3 rounded-lg shadow-md">
              <p className="text-gray-600 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</p>
              <div className="flex items-center">
                {editMode[key] ? (
                  <input
                    type={key === "password" ? "password" : "text"}
                    value={editedInfo[key].toString()}
                    onChange={(event) => handleInputChange(event, key)}
                    className="border rounded-lg py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-2/3"
                  />
                ) : (
                  <p className="text-gray-900">{value}</p>
                )}
                <div className="ml-auto">
                  {editMode[key] ? (
                    <div className='flex'>
                      <IoCheckmarkCircleOutline
                        className="text-green-500 cursor-pointer hover:text-green-700 transition duration-200 mr-2"
                        onClick={() => handleSaveClick(key)}
                      />
                      <IoCloseCircleOutline
                        className="text-red-500 cursor-pointer hover:text-red-700 transition duration-200"
                        onClick={() => handleCancelClick(key)}
                      />
                    </div>
                  ) : (
                    <IoPencil
                      className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-200"
                      onClick={() => handleEditClick(key)}
                    />
                  )}
                </div>
              </div>
              {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
