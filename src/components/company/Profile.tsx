'use client';
import React, { useEffect, useState } from 'react';
import { IoCloseCircleOutline, IoCheckmarkCircleOutline, IoPencil } from "react-icons/io5";

type CompanyInfo = {
  name: string;
  nit: string;
  address: string;
  phone: string;
  legalRepresentativeName: string;
  legalRepresentativeEmail: string;
  legalRepresentativePhone: string;
  numberOfEmployees: number;
}

type EditedInfo = {
  [key: string]: string | number;
}

const Profile = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: '',
    nit: '',
    address: '',
    phone: '',
    legalRepresentativeName: '',
    legalRepresentativeEmail: '',
    legalRepresentativePhone: '',
    numberOfEmployees: 0,
  });
  
  const baseURL = 'http://18.218.220.138:8081';
  const [user, setUser] = useState<any>(null);
  const [companyId, setCompanyId] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editedInfo, setEditedInfo] = useState<EditedInfo>({ ...companyInfo });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if(typeof window !== 'undefined'){
    const user = localStorage.getItem("user");
    if(user){
      setUser(JSON.parse(user));
      setCompanyId(JSON.parse(user).id);
    }
  }
  }, []);

  useEffect(() => {
    
    fetch(`${baseURL}/company/get/info/${companyId}`)
      .then((response) => response.json())
      .then((data) => setCompanyInfo(data))
      .catch((error) => console.error(error));
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
    setEditedInfo({ ...companyInfo }); // Asegurarse de que editedInfo tenga todas las propiedades
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    const { value } = event.target;
    setEditedInfo({ ...editedInfo, [key]: value });
  };

  const handleSaveClick = async () => {
    let valid = true;
    const newErrors: Record<string, string> = {};

    ['nit', 'phone', 'legalRepresentativePhone'].forEach((key) => {
      if(editedInfo !== undefined && editedInfo[key] === undefined) return;
      const isValidFormat = RegExp('^[0-9]{10}$').test(editedInfo[key].toString().replace(/\D/g, ''));
      if (!isValidFormat) {
        newErrors[key] = "El formato debe ser de 10 dígitos numéricos";
        valid = false;
      }
    });

    if (valid) {
      setCompanyInfo({ ...editedInfo } as CompanyInfo);
      setEditMode(false);
      setErrors({});
      
      const response = await fetch(`${baseURL}/company/set/info/${companyId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedInfo),
      });

      if (!response.ok) {
        throw new Error('Error saving changes');
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setEditedInfo({ ...companyInfo });
    setErrors({});
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      <div className="rounded-lg p-6 max-w-4xl w-full">
        <div className="flex justify-start gap-4 items-center mb-6">
          <h1 className="text-3xl font-bold text-secondary_old">Perfil de la Empresa</h1>
          {editMode ? (
            <div className="flex">
              <IoCheckmarkCircleOutline
                className="text-green-500 cursor-pointer hover:text-green-700 transition duration-200 mr-4"
                onClick={handleSaveClick}
                size={24}
              />
              <IoCloseCircleOutline
                className="text-red-500 cursor-pointer hover:text-red-700 transition duration-200"
                onClick={handleCancelClick}
                size={24}
              />
            </div>
          ) : (
            <IoPencil
              className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-200"
              onClick={handleEditClick}
              size={24}
            />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(companyInfo).map(([key, value]) => (
            <div key={key} className="flex flex-col bg-white p-3 rounded-lg shadow-md">
              <p className="text-gray-600 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</p>
              <div className="flex items-center">
                {editMode ? (
                  <input
                    type={key === "password" ? "password" : "text"}
                    value={editedInfo[key].toString()}
                    onChange={(event) => handleInputChange(event, key)}
                    className="border rounded-lg py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-2/3"
                  />
                ) : (
                  <p className="text-gray-900">{value}</p>
                )}
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
